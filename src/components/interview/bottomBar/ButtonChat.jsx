import React from 'react';
import { BsChatRightTextFill, BsChatRightText } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setChatActive } from '../../../redux/chat/actions';

const ButtonChat = () => {
    const dispatch = useDispatch();
    const { chatActive } = useSelector( state => state.chat );
    const style = {
        button: {
            border: 'none',
            backgroundColor:'transparent',
        },
        icon: {
            fontSize: '30px',
            color: chatActive? '#0d6efd': 'black',
        },
    };
    const handleChatBtnClick = ()=>{
        console.log('Handle chat btn click');
        const chatStatus = !chatActive;
        dispatch(setChatActive(chatStatus));
    };

    return (
        <>
            <div className="container-fluid text-end">
                <button style={style.button} type="button" data-bs-toggle="collapse" data-bs-target="#chatBox" aria-controls="chatBox" aria-expanded="false" aria-label="Chat Toggle">
                    { chatActive? <BsChatRightText style={style.icon} onClick={ handleChatBtnClick } /> : <BsChatRightTextFill style={style.icon} onClick={ handleChatBtnClick } />}
                </button>
            </div>
        </>
    )
}

export default ButtonChat