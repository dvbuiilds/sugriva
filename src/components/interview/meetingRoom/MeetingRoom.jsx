import React, { useEffect } from 'react';
import BottomBar from '../bottomBar/BottomBar';
import { useNavigate, useParams } from 'react-router-dom';
import IncomingRequestDialog from './IncomingRequestDialog';
import ChatBox from './ChatBox';
import LocalVideo from './LocalVideo';
import RemoteVideo from './RemoteVideo';
import { useSelector } from 'react-redux';

const MeetingRoom = () => {
    const { id } = useParams();
    const { meetingCode } = useSelector( state => state.user );
    const navigate = useNavigate();

    useEffect(()=>{
        if(id !== meetingCode){
            navigate('/meeting');
        }
    }, [meetingCode, id, navigate]);

    const style = {
        parent: {
            position: 'relative', 
            height: '80vh',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center'
        },
        hiddenModalBtn: {
            position: 'absolute', 
            zIndex: '-1', 
            display: 'none',
        },
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row p-0 m-0">
                    <div className="col" style={{overflow: 'hidden'}}>
                        <div className="container-fluid py-3">
                            <div className="row"><h2 className='text-center'>Meeting Room</h2></div>
                        </div>
                        <div className="container-fluid py-3" style={style.parent}>
                            <RemoteVideo>
                                <LocalVideo />
                            </RemoteVideo>
                            <IncomingRequestDialog />
                        </div>
                        <div className="fixed-bottom">
                            <BottomBar meetingCode={id} />
                        </div>
                    </div>
                    <ChatBox />
                </div>
            </div>
        </>
    );
};

export default MeetingRoom;