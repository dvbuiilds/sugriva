import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const WaitingRoom = () => {
    const { meetingCode } = useSelector( state => state.user );
    const navigate = useNavigate();

    useEffect(()=>{
        if(meetingCode){
            navigate(`/meeting/${meetingCode}`);
        }
    }, [meetingCode, navigate]);
    
    return (
        <>
            <h3>Please wait. You meeting is starting in a moment.</h3>
        </>
    );
};

export default WaitingRoom;