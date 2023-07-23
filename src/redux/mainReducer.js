import chatReducer from "./chat/reducer";
import streamReducer from "./stream/reducer";

const { combineReducers } = require("redux");
const { default: userReducer } = require("./user/reducer");

const mainReducer = combineReducers({
    user: userReducer,
    stream: streamReducer,
    chat: chatReducer,
});

export default mainReducer;