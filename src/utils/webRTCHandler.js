/* eslint-disable no-unused-vars */
import { setChatHistory } from "../redux/chat/actions";
import { call_Statuses, resetStream, setCallStatus, setCallerUsername, setLocalStream, setMeetingHostUsername, setMeetingMessage, setMeetingRole, setRemoteStream, setRoomStreams } from "../redux/stream/actions";
import { setMeetingActive } from "../redux/user/actions";
import store from "../redux/store";
import { sendMeetingRoomJoinRequest, registerNewMeeting, sendEntryRequestResponse, sendEndMeeting, sendEndMeetingForAll, sendEndMeetingForAttendee, sendMessage } from "./wssConnection";

const defaultConstraints = {
    video: {
        width: 1100,
    },
    audio: true
};

export const getLocalStream = ()=>{
    navigator.mediaDevices.getUserMedia(defaultConstraints)
    .then(stream => {
        store.dispatch(setLocalStream(stream));
        store.dispatch(setCallStatus(call_Statuses.AVAILABLE));
    })
    .catch(err => {
        console.log(err.message);
    });
};

let myPeer = null;
let myPeerId = null;
let meetingRoomId = null;
let room = null;
let connectedUser = {};
let msgConn = null;

export const connectWithMyPeer = ()=>{
    myPeer = new window.Peer(undefined, {
        path: '/peerjs',
        host: '/',
        port: '8080'
    });

    myPeer.on('open', (id)=>{
        myPeerId = id;
    });

    myPeer.on('call', (call) => {
        call.answer(store.getState().stream.localStream);
        call.on('stream', (incomingStream)=> {
            store.dispatch(setRemoteStream(incomingStream));
        });
    });

    getLocalStream();
};

export const addVideoStream = (incomingStream)=>{
    const roomStreams = [
        ...store.getState().stream.roomStreams,
        incomingStream
    ];

    store.dispatch(setRoomStreams(roomStreams));
};

export const createNewMeeting = ()=>{
    const hostUsername = store.getState().user.userName;

    registerNewMeeting({
        peerId: myPeerId,
        hostUsername
    });
};

export const meetingRoles = {
    HOST: 'HOST',
    ATTENDEE: 'ATTENDEE'
};

export const handleNewMeetingRoom = (data)=>{
    room = data.room;
    store.dispatch(setMeetingRole(meetingRoles.HOST));
    store.dispatch(setMeetingActive(data.room.roomId));
    store.dispatch(setMeetingHostUsername(data.room.hostUsername));
    store.dispatch(setCallStatus(call_Statuses.IN_PROGRESS));
};

export const joinMeetingRoom = (roomId)=>{
    meetingRoomId = roomId;
    sendMeetingRoomJoinRequest({
        roomId,
        // localStreamId: store.getState().stream.localStream.id,
        peerId: myPeerId,
        username: store.getState().user.userName,
    });
    store.dispatch(setCallStatus(call_Statuses.IN_PROGRESS));
};

export const handleAdmitRequest = (data)=>{
    connectedUser = {
        socketId: data.attendeeSocketId,
        username: data.attendeeUsername,
        peerId: data.attendeePeerId
    };
    if(store.getState().user.meetingCode.length >0 && store.getState().stream.meetingRole === meetingRoles.HOST){
        store.dispatch(setCallerUsername(data.attendeeUsername));
    }
};

export const handleRoomCheck = (data)=>{
    room = data.room;
    connectedUser = {
        socketId: data.room.hostSocketId,
        username: data.room.hostUsername,
        peerId: data.room.hostPeerId,
    };
    console.log(room);
    store.dispatch(setMeetingMessage(data.message));
};

export const entryDenied = ()=>{
    store.dispatch(setCallerUsername(''));
    sendEntryRequestResponse({
        socketId: connectedUser.socketId,
        roomId: room.roomId,
        message: 'ENTRY_DENIED'
    });
    connectedUser = {};
};

export const entryAccepted = ()=>{
    sendEntryRequestResponse({
        socketId: connectedUser.socketId,
        roomId: room.roomId,
        message: 'ENTRY_ACCEPTED'
    });

    store.dispatch(setCallStatus(call_Statuses.ACTIVE));

    // calling the peer 
    makePeerCall();
};

export const makePeerCall = ()=>{
    const localStream = store.getState().stream.localStream;
    const call = myPeer.call(connectedUser.peerId, localStream);

    call.on('stream', (incomingStream) => {
        store.dispatch(setRemoteStream(incomingStream));
    });
};

export const handleRequestResponse = (data)=>{
    store.dispatch(setMeetingMessage(data.message));
    if(data.message === 'ENTRY_ACCEPTED'){
        store.dispatch(setCallStatus(call_Statuses.ACTIVE));
        store.dispatch(setMeetingActive(data.roomId));
        makePeerCall();
    }
};

export const handleDisconnectedUser = (data)=>{
    if(data.socketId === connectedUser.socketId){
        connectedUser = {};
        store.dispatch(setRemoteStream(null));
        store.dispatch(setCallStatus(call_Statuses.IN_PROGRESS));
        store.dispatch(setCallerUsername(''));
    }
};

export const endMeeting = ()=> {
    if(store.getState().stream.meetingRole === meetingRoles.HOST){
        // the meeting should end for all the users.
        console.log('inside endMeeting by Host.');
        sendEndMeetingForAll({
            attendeeSocketId: connectedUser.socketId,
            roomId: room.roomId,
        });
    }
    else{
        // the meeting should not end for host.
        sendEndMeetingForAttendee({
            roomId: room.roomId,
            hostSocketId: connectedUser.socketId,
        });
    }

    connectedUser = {};
    store.dispatch(resetStream());
    room = null;
    myPeerId = null;
    msgConn = null;
    myPeer.destroy();
    connectWithMyPeer();
};

export const resetStateAfterCallEnd = ()=>{
    connectedUser = {};
    store.dispatch(resetStream());
    room = null;
    myPeerId = null;
    msgConn = null;
    myPeer.destroy();
    connectWithMyPeer();
    store.dispatch(setMeetingActive(''));
};

export const handleAttendeeLeft = ()=>{
    store.dispatch(setRemoteStream(null));
    store.dispatch(setCallStatus(call_Statuses.IN_PROGRESS));
    store.dispatch(setCallerUsername(''));
    connectedUser = {};
    myPeerId = null;
    msgConn = null;
    myPeer.destroy();
    connectWithMyPeer();
};

export const messageToPeer = (message) => {
    sendMessage({
        socketId: connectedUser.socketId,
        message
    });
};

export const handleNewMessage = (data)=>{
    let chatHistory = store.getState().chat.chatHistory;
    chatHistory.push({
        sender: connectedUser.username,
        message: data.message
    });

    store.dispatch(setChatHistory(chatHistory));
    console.log('New message recieved: ', data.message );
};