export const CHAT_SET_CHAT_ACTIVE = 'CHAT_SET_CHAT_ACTIVE';
export const CHAT_SET_CHAT_HISTORY = 'CHAT_SET_CHAT_HISTORY';

export const setChatActive = (active) => {
    return {
        type: CHAT_SET_CHAT_ACTIVE,
        active
    };
};

export const setChatHistory = (history) => {
    return {
        type: CHAT_SET_CHAT_HISTORY,
        history
    };
};