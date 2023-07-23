require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const socketio = require('socket.io');
const http = require('http');
const uniqid = require('uniqid');
const { ExpressPeerServer } = require('peer');
const { createPeerServerListeners } = require('./peer/peerMethodHandler');
const connectToMongoDB = require('./config/database');
connectToMongoDB();

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
});

let meetingRooms = [];
let mapSocketIdToRoomId = {};

const peerServer = ExpressPeerServer( server, { debug: true } );
app.use('/peerjs', peerServer);
createPeerServerListeners(peerServer);

io.on('connection', (socket) => {
    socket.on('disconnect', ()=>{
        console.log('User diconnected.');
        io.sockets.emit('disconnected-user', {socketId: socket.id});
        io.to(mapSocketIdToRoomId[socket.id]).emit('end-meet-for-all');
    });

    socket.on('group-call-register', (data)=>{
        const roomId = uniqid();
        socket.join(roomId);

        const newMeetingRoom = {
            hostPeerId: data.peerId,
            hostUsername: data.hostUsername,
            hostSocketId: socket.id,
            roomId: roomId,
            numOfParticipants: 1,
        };

        meetingRooms.push(newMeetingRoom);
        mapSocketIdToRoomId[socket.id] = roomId;
        console.log(meetingRooms);

        socket.emit('new-room-created', {
            room: newMeetingRoom,
        });
    });

    socket.on('group-call-join-request', (data)=>{
        const room = meetingRooms.find( room => room.roomId === data.roomId );
        
        if(room){
            // it should make a request and wait for acceptance.
            io.to(room.hostSocketId).emit('admittance-request', {
                attendeeSocketId: data.socketId,
                attendeeUsername: data.username,
                attendeePeerId: data.peerId,
            });
            
            socket.emit('room-check', {
                message: 'SUCCESS',
                room
            });
        } else{
            // it should return a response that call is not found.
            socket.emit('room-check', {message: 'FAILURE'});
        }
    });

    socket.on('join-request-response', (data)=>{
        console.log('Inside Join Request Response call back.');
        io.sockets.sockets.get(data.socketId).join(data.roomId);
        io.to(data.socketId).emit('request-response', data);
    });

    socket.on('end-meet-for-all', (data)=>{
        const room = meetingRooms.find( room => room.roomId === data.roomId );
        if(room){
            io.to(data.attendeeSocketId).emit('meeting-ended-by-host');
        }
        meetingRooms = meetingRooms.filter( room => room.roomId !== data.roomId );
    });

    socket.on('end-meeting-for-attendee', (data)=>{
        socket.leave(data.roomId);
        io.to(data.hostSocketId).emit('attendee-left');
    });

    // for sending and recieving messages (chat).
    socket.on('send-message', (data)=>{
        io.to(data.socketId).emit('new-message', data);
    });
});

const port = process.env.BACK_PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', require('./routes/authorization'));
app.use('/api/candidateform', require('./routes/candidateForm'));

app.use('/api/admin', require('./routes/adminAuthorization'));

server.listen(port);