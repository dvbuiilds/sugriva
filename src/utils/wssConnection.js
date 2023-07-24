import socketClient from 'socket.io-client';
import { handleAdmitRequest, handleAttendeeLeft, handleDisconnectedUser, handleNewMeetingRoom, handleNewMessage, handleRequestResponse, handleRoomCheck, resetStateAfterCallEnd } from './webRTCHandler';
let socket = null;

export const connectWithWebSocketServer = ()=>{
    const BACKEND_PORT = process.env.BACK_PORT || 5000;
    const SERVER_URL = process.env.SERVER_URL || 'http://localhost';
    const URL = `${SERVER_URL}:${BACKEND_PORT}`;

    console.log('socket io url is: ', URL);
    socket = socketClient(URL);

    socket.on('connection', (data)=>{
        console.log('Connected with server. ', socket.id);
        console.log(data);
    });

    socket.on('disconnected-user', (data)=>{
        handleDisconnectedUser(data);
    });

    socket.on('new-room-created', (data)=>{
        handleNewMeetingRoom(data);
    });

    // for host to know about join requests.
    socket.on('admittance-request', (data)=>{
        handleAdmitRequest(data);
    });

    socket.on('room-check', (data)=>{
        handleRoomCheck(data);
    });

    socket.on('request-response', (data)=>{
        handleRequestResponse(data);
    });

    socket.on('meeting-ended-by-host', ()=>{
        resetStateAfterCallEnd();
    });

    socket.on('attendee-left', ()=>{
        handleAttendeeLeft();
    });

    // for receiving messages.
    socket.on('new-message', (data)=>{
        handleNewMessage(data);
    })
};

export const registerNewMeeting = (data)=>{
    socket.emit('group-call-register', data);
};

export const sendMeetingRoomJoinRequest = (data)=>{
    socket.emit('group-call-join-request', {
        ...data,
        socketId: socket.id
    });
};

export const sendEntryRequestResponse = (data)=>{
    socket.emit('join-request-response', data);
};

export const sendEndMeetingForAll = (data)=>{
    socket.emit('end-meet-for-all', data);
};

export const sendEndMeetingForAttendee = (data)=> {
    socket.emit('end-meeting-for-attendee', data);
};

export const sendMessage = (data)=>{
    socket.emit('send-message', data);
};