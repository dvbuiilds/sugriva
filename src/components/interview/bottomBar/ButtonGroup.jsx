import React from 'react';
import { MdMic, MdMicOff, MdOutlineVideocam, MdOutlineVideocamOff, MdCallEnd, MdOutlineScreenShare, MdOutlineStopScreenShare } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { endMeeting } from '../../../utils/webRTCHandler';
import { setLocalCamera, setLocalMic, setScreenShare } from '../../../redux/stream/actions';

const ButtonGroup = () => {
    const {localStream, localCamera, localMic, screenShare} = useSelector(state => state.stream);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const style = {
        icons: {
            fontSize: '50px',
            borderRadius: '50px',
            backgroundColor: '#dc3545',
            padding: '12px 12px 12px 12px',
            color: 'white'
        }
    };

    const handleCameraBtnClick = ()=>{
        const newState = !localCamera;
        localStream.getVideoTracks()[0].enabled = newState;
        dispatch(setLocalCamera(newState));
    };

    const handleMicBtnClick = ()=>{
        const newState = !localMic;
        localStream.getAudioTracks()[0].enabled = newState;
        dispatch(setLocalMic(newState));
    };

    const handleScreenShareClick = ()=>{ 
        const newState = !screenShare;
        dispatch(setScreenShare(newState));
    };

    const handleCallEndClick = ()=>{
        endMeeting(); 
        navigate('/meeting');
    };

    return (
        <>
            <div className="row p-0 m-0 justify-content-center">
                <div className="col-1 mx-1">
                    { localMic ? 
                    <MdMic onClick={ handleMicBtnClick } style={{...style.icons, backgroundColor: 'transparent', color: 'black'}} />
                    : <MdMicOff onClick={ handleMicBtnClick } style={style.icons} />
                    }
                </div>
                <div className="col-1 mx-1">
                    { localCamera ?
                    <MdOutlineVideocam onClick={ handleCameraBtnClick } style={{...style.icons, backgroundColor: 'transparent', color: 'black'}} />
                    : <MdOutlineVideocamOff onClick={ handleCameraBtnClick } style={style.icons} />
                    }
                </div>
                <div className="col-1 mx-1">
                    { screenShare ?
                    <MdOutlineStopScreenShare onClick={ handleScreenShareClick } style={style.icons} />
                    : <MdOutlineScreenShare onClick={ handleScreenShareClick } style={{...style.icons, backgroundColor: 'transparent', color: 'black'}} />
                    }
                </div>
                <div className="col-1 mx-1">
                    <MdCallEnd 
                    onClick={ handleCallEndClick } 
                    style={{...style.icons, backgroundColor: '#dc3545', color: 'white' }} 
                    />
                </div>
            </div>
        </>
    );
};

export default ButtonGroup;