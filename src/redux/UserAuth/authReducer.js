import { LOGIN, LOGOUT } from "./authTypes";

const initialState = {
    loggedIn: false,
    role: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    id: '',
    authToken: ''
};

const authReducer = (state=initialState, action)=> {
    // if(action.payload){
    //     console.log(action.payload);
    // }
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                loggedIn: true,
                role: action.payload.role,
                firstName: action.payload.firstName,
                lastname: action.payload.lastName,
                userName: action.payload.userName,
                email: action.payload.email,
                id: action.payload.id,
                authToken: action.payload.authToken
            };
        
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                role: '',
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                id: '',
                authToken: ''
            }

        default:
            return state;
    };
};

export default authReducer;