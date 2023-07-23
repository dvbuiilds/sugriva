import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { connectWithMyPeer, createNewMeeting, joinMeetingRoom } from '../../utils//webRTCHandler';
import { useSelector } from 'react-redux';

const Meeting = () => {
    const navigate = useNavigate();
    const [inputPlaceholder, setInputPlaceholder] = useState('or Join a meeting');
    const [meetingCode, setMeetingCode] = useState('');
    const { role } = useSelector( state => state.user );
    const handleCreateMeetingBtn = ()=>{
        // generate meeting code. get the meeting code in response.
        createNewMeeting();
        // navigate to the meeting code.
        navigate('/wtgri-AXUHSD');
    };
    const handleMeetingCodeInput = (event) => { 
        if(event.keyCode === 13){
            // send the meeting code to the server for check
            // whether the meeting with that code exists or not.
            joinMeetingRoom(meetingCode);
            navigate(`/join/${meetingCode}`); // might have to remove this.
            setMeetingCode('');
        }
    };
    const handleInputClick = ()=>{
        setInputPlaceholder('Enter the meeting code');
    };

    useEffect(()=>{
        connectWithMyPeer();
    });

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="">
                            { 
                            role !== 'candidate'? 
                            <button 
                            onClick={ handleCreateMeetingBtn } 
                            className="btn btn-md btn-primary"
                            style={{width: '100%'}}
                            >Create Meeting Room</button>
                            : <></>
                            }
                            <button 
                            onClick={ handleCreateMeetingBtn } 
                            className="btn btn-md btn-primary"
                            style={{width: '100%'}}
                            >Create Meeting Room</button>
                            <input
                            required
                            className="card border my-3" 
                            style={{width: '100%', height: '5vh'}}
                            placeholder={ inputPlaceholder }
                            value={ meetingCode }
                            onChange={ (e)=> setMeetingCode(e.target.value) }
                            onKeyDown={ handleMeetingCodeInput }
                            onClick={ handleInputClick }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Meeting;