import React from 'react'

const ChatMessage = (props) => {
    const { sender, message } = props;

    const style = {
        sender: {
            fontWeight: '400',
            fontSize: '13px',
            color: sender === 'You'? '#0D6EFD' : '#000',
            margin: '0'
        },
        message: {
            fontWeight: '300',
            fontSize: '13px',
            margin: '0'
        },
    }
    return (
        <>
            <div className="container-fluid mt-1">
                <div className="row p-0 m-0">
                    <p style={style.sender}>{sender}</p>
                    <p style={style.message}>{message}</p>
                </div>
            </div>
        </>
    );
};

export default ChatMessage;