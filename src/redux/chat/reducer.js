const { CHAT_SET_CHAT_ACTIVE, CHAT_SET_CHAT_HISTORY } = require("./actions");

const initialState = {
    chatActive: false,
    chatHistory: [],
};

const chatReducer = (state = initialState, action) => {
    switch(action.type){
        case CHAT_SET_CHAT_ACTIVE:
            return {
                ...state,
                chatActive: action.active
            };

        case CHAT_SET_CHAT_HISTORY:
            return {
                ...state,
                chatHistory: action.history
                };

        default: 
            return state;
    }
};

export default chatReducer;