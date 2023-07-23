import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdSend } from 'react-icons/md';
import { setChatHistory } from '../../../redux/chat/actions';
import { messageToPeer } from '../../../utils/webRTCHandler'; // path to be changed.
import ChatMessage from './ChatMessage';
import ScrollableFeed from 'react-scrollable-feed';

const ChatBox = () => {
    const { chatActive } = useSelector( state => state.ui );
    const { chatHistory } = useSelector( state => state.chat );
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const style = {
        sendIcon: {
            fontSize: '16px',
            color: '#0d6efd'
        },
    };

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13){
            handleSubmitBtnClick();
        }
    };

    const handleSubmitBtnClick = () => {
        if(message.length === 0){
            return ;
        }
        let newChatHistory = chatHistory;
        newChatHistory.push({ sender: 'You', message });
        dispatch(setChatHistory(newChatHistory));
        messageToPeer(message);
        setMessage('');
    };

    return (
        <>
            <div style={{display: chatActive? '': 'none'}} className="col-3 m-0 p-0">
                <div className="card" style={{height: '90vh', position: 'relative'}}>
                    <div className='row mx-2 my-3'><h4>In-call Messages</h4></div>
                    <div className='' style={{height: '75vh', overflowX: "hidden", overflowY: "auto"}}>
                        <ScrollableFeed>
                        { chatHistory.map( chat => <ChatMessage sender={chat.sender} message={chat.message} /> )}
                        </ScrollableFeed>
                    </div>
                    <div className="row p-0 m-0 align-items-center" style={{position: 'absolute', bottom: '0vh', width: '100%',}}>
                        <div className="col-11 p-0">
                            <input
                            className='border border-primary rounded'
                            placeholder='Enter your message...'
                            style={{ width: '100%', height: '5vh'}}
                            value={message}
                            onChange={ (e)=>setMessage(e.target.value) }
                            onKeyDown={ handleInputKeyDown }
                            />
                        </div>
                        <div className="col-1 p-0">
                            <button className='border-0 bg-transparent' style={{height: '5vh'}} onClick={()=>console.log('send button clicked...')} >
                                <MdSend style={style.sendIcon} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBox;