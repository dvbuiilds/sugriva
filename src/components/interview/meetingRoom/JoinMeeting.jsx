import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoStream from './VideoStream';
import { joinMeetingRoom } from '../../../utils/webRTCHandler';
import { useNavigate, useParams } from 'react-router-dom';
import { call_Statuses, setMeetingMessage } from '../../../redux/stream/actions';

const JoinMeeting = () => {
    const dispatch = useDispatch();
    const{ meetingMessage, callStatus } = useSelector( state=> state.stream );
    const spinner = require('../../../assets/images/giphy.gif');
    const { localStream } = useSelector(state=>state.stream);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(callStatus === call_Statuses.ACTIVE){
            navigate(`/meeting/${id}`);
        }
        setTimeout(() => { 
            dispatch(setMeetingMessage('IGNORE'));
         }, 60000);
    }, [callStatus, dispatch, id, navigate]);

    const handleRequestAgainBtn = ()=>{
        joinMeetingRoom(id);
        dispatch(setMeetingMessage(''));
        setTimeout(() => { 
            dispatch(setMeetingMessage('IGNORE'));
        }, 60000);
    };

    const style={
        img: {
            width: '50px',
            height: '50px',
        },
        videoContainer: {
            overflow: 'hidden', 
            borderRadius: '5px',
            height: '50vh',
        },
        video: {
            borderRadius: '5px',
            height: '100%',
        },
        margins: {
            marginTop: '20vh', 
            marginBottom: '20vh',
        },
    };

    return (
        <>
            <div className="container" >
                <div className="row p-0 display-flex justify-content-center align-items-center" style={style.margins}>
                    <div className="col-md-7 p-0 m-0">
                        <VideoStream videoStream={ localStream } videoContainerStyle={style.videoContainer} videoStyle={style.video} muted={true} />
                    </div>
                    <div className="col-md-3 text-center">
                        {   meetingMessage === '' || meetingMessage === 'SUCCESS' ? 
                            <>
                                <img style={style.img} src={ spinner } alt='' />
                                <div className="row p-0 justify-content-center"><span className='fs-5 text-center'>Joining the meet</span></div>
                            </> : <>
                                <span className='fs-5'>{ meetingMessage === 'FAILURE' ? <>Meeting id not found</> : meetingMessage === 'IGNORE'? <>No response from the host</> : <>Meeting Entry Denied</> }</span>
                                <button onClick={ handleRequestAgainBtn } className='btn btn-md btn-primary my-2'>Request Again</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinMeeting;