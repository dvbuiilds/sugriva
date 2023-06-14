import { combineReducers } from 'redux'; 
import authReducer from './UserAuth/authReducer';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;