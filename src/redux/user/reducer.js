const { USER_SET_LOGGED_IN, USER_SET_ROLE, USER_SET_FIRST_NAME, USER_SET_LAST_NAME, USER_SET_USER_NAME, USER_SET_EMAIL, USER_SET_ID, USER_SET_AUTHTOKEN, USER_SET_MEETING_CODE, USER_SET_PROFILE_SUBMITTED, USER_SET_COMPLETE_USER } = require("./actions");

const initialState = {
    loggedIn: false,
    role: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    id: '',
    authToken: '',
    meetingCode: '',
    profile: '',
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.status
            };
        
        case USER_SET_ROLE:
            return {
                ...state,
                role: action.role
            };

        case USER_SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.name
            };

        case USER_SET_LAST_NAME:
            return {
                ...state,
                lastName: action.name
            };

        case USER_SET_USER_NAME:
            return {
                ...state,
                userName: action.name
            };

        case USER_SET_EMAIL:
            return {
                ...state,
                email: action.email
            };

        case USER_SET_ID:
            return {
                ...state,
                id: action.id
            };

        case USER_SET_AUTHTOKEN:
            return {
                ...state,
                authToken: action.authToken
            };

        case USER_SET_MEETING_CODE:
            return {
                ...state,
                meetingCode: action.code,
            };

        case USER_SET_PROFILE_SUBMITTED:
            return {
                ...state,
                profile: action.status,
            };

        case USER_SET_COMPLETE_USER:
            return {
                ...state,
                ...action.data,
            };

        default: 
            return state;
    }
};

export default userReducer;