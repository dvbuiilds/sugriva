export const STREAM_SET_LOCALSTREAM = 'STREAM_SET_LOCALSTREAM';
export const STREAM_SET_REMOTESTREAM = 'STREAM_SET_REMOTESTREAM';
export const STREAM_SET_ROOMSTREAMS = 'STREAM_SET_ROOMSTREAMS';
export const STREAM_SET_LOCAL_CAMERA = 'STREAM_SET_LOCAL_CAMERA';
export const STREAM_SET_LOCAL_MIC = 'STREAM_SET_LOCAL_MIC';
export const STREAM_SET_SCREENSHARE = 'STREAM_SET_SCREENSHARE';
export const STREAM_SET_CALL_STATUS = 'STREAM_SET_CALL_STATUS';
export const STREAM_SET_CALLER_USERNAME = 'STREAM_SET_CALLER_USERNAME';
export const STREAM_SET_CALLEE_USERNAME = 'STREAM_SET_CALLEE_USERNAME';
export const STREAM_SET_JOIN_REQUEST_SENDER_USERNAME = 'STREAM_SET_JOIN_REQUEST_SENDER_USERNAME';
export const STREAM_SET_MEETING_HOST_USERNAME = 'STREAM_SET_MEETING_HOST_USERNAME';
export const STREAM_SET_MEETING_ROLE = 'STREAM_SET_MEETING_ROLE';
export const STREAM_RESET = 'STREAM_RESET';
export const STREAM_SET_MEETING_MESSAGE = 'STREAM_SET_MEETING_MESSAGE';

export const call_Statuses = {
    AVAILABLE: 'AVAILABLE',
    ACTIVE: 'ACTIVE',
    IN_PROGRESS: 'IN_PROGRESS'
};

export const setLocalStream = (localStream) => {
    return {
        type: STREAM_SET_LOCALSTREAM,
        localStream
    };
};

export const setRemoteStream = (remoteStream) => {
    return {
        type: STREAM_SET_REMOTESTREAM,
        remoteStream
    };
};

export const setRoomStreams = (roomStreams)=>{
    return {
        type: STREAM_SET_ROOMSTREAMS,
        roomStreams
    };
};

export const setLocalCamera = (active) => {
    return {
        type: STREAM_SET_LOCAL_CAMERA,
        active
    };
};

export const setLocalMic = (active) => {
    return {
        type: STREAM_SET_LOCAL_MIC,
        active
    };
};

export const setScreenShare = (active) => {
    return {
        type: STREAM_SET_SCREENSHARE,
        active
    };
};

export const setCallStatus = (callStatus) => {
    return {
        type: STREAM_SET_CALL_STATUS,
        callStatus
    };
};

export const setCallerUsername = (username) => {
    return {
        type: STREAM_SET_CALLER_USERNAME,
        username
    };
};

export const setCalleeUsername = (username) => {
    return {
        type: STREAM_SET_CALLEE_USERNAME,
        username
    };
};

export const setJoinRequestSenderUsername = (username)=> {
    return {
        type: STREAM_SET_JOIN_REQUEST_SENDER_USERNAME,
        username
    };
};

export const setMeetingHostUsername = (username) => {
    return {
        type: STREAM_SET_MEETING_HOST_USERNAME,
        username
    };
};

export const setMeetingRole = (role) => {
    return {
        type: STREAM_SET_MEETING_ROLE,
        role
    };
};

export const resetStream = () => {
    return {
        type: STREAM_RESET,
    };
};

export const setMeetingMessage = (message) => {
    return {
        type: STREAM_SET_MEETING_MESSAGE,
        message
    };
};