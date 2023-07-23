import { STREAM_RESET, STREAM_SET_CALLEE_USERNAME, STREAM_SET_CALLER_USERNAME, STREAM_SET_CALL_STATUS, STREAM_SET_JOIN_REQUEST_SENDER_USERNAME, STREAM_SET_LOCALSTREAM, STREAM_SET_LOCAL_CAMERA, STREAM_SET_LOCAL_MIC, STREAM_SET_MEETING_HOST_USERNAME, STREAM_SET_MEETING_MESSAGE, STREAM_SET_MEETING_ROLE, STREAM_SET_REMOTESTREAM, STREAM_SET_ROOMSTREAMS, STREAM_SET_SCREENSHARE, call_Statuses } from "./actions";

const initialState = {
    localStream: null,
    remoteStream: null,
    roomStreams: [],
    localCamera: true,
    localMic: true,
    screenShare: false,
    callStatus: call_Statuses.AVAILABLE,
    callerUsername: '',
    calleeUsername: '',
    joinRequestSender: '',
    meetingHostUsername: '',
    meetingRole: '',
    meetingMessage: '',
};

const streamReducer = (state = initialState, action)=>{
    switch(action.type){
        case STREAM_SET_LOCALSTREAM:
            return {
                ...state,
                localStream: action.localStream
            };

        case STREAM_SET_REMOTESTREAM:
            return {
                ...state,
                remoteStream: action.remoteStream
            };

        case STREAM_SET_ROOMSTREAMS:
            return {
                ...state,
                roomStreams: action.roomStreams
            };

        case STREAM_SET_LOCAL_CAMERA:
            return {
                ...state,
                localCamera: action.active
            };
        
        case STREAM_SET_LOCAL_MIC:
            return {
                ...state,
                localMic: action.active
            };

        case STREAM_SET_SCREENSHARE:
            return {
                ...state,
                screenShare: action.active
            };
        
        case STREAM_SET_CALL_STATUS:
            return {
                ...state,
                callStatus: action.callStatus
            };

        case STREAM_SET_CALLER_USERNAME:
            return {
                ...state,
                callerUsername: action.username
            };

        case STREAM_SET_CALLEE_USERNAME:
            return {
                ...state,
                calleeUsername: action.username
            };
        
        case STREAM_SET_MEETING_HOST_USERNAME:
            return {
                ...state,
                meetingHostUsername: action.username
            };

        case STREAM_SET_MEETING_ROLE:
            return {
                ...state,
                meetingRole: action.role
            };

        case STREAM_SET_JOIN_REQUEST_SENDER_USERNAME:
            return {
                ...state,
                joinRequestSender: action.username
            };

        case STREAM_SET_MEETING_MESSAGE:
            return {
                ...state,
                meetingMessage: action.message
            };

        case STREAM_RESET:
            return {
                ...state,
                localStream: null,
                remoteStream: null,
                localCamera: true,
                localMic: true,
                screenShare: false,
                callStatus: call_Statuses.AVAILABLE,
                callerUsername: '',
                calleeUsername: '',
                meetingHostUsername: '',
                meetingRole: ''
            };

        default:
            return state;
    };
};

export default streamReducer;