import React from 'react';
import { useSelector } from 'react-redux';
import VideoStream from './VideoStream';

const RemoteVideo = (props) => {
    const { remoteStream } = useSelector( state=> state.stream);

    const style={
        remoteVideoContainer: {
            overflow: 'hidden',
            height: '75vh',
            justifyContent: 'center',
            borderRadius: '10px',
            backgroundColor: 'transparent'
        },
        remoteVideo: {
            position: 'relative',
            borderRadius: '5px'
        },
    };

    if(remoteStream){
        return (
            <>
                <VideoStream videoStream={ remoteStream } videoContainerStyle={ style.remoteVideoContainer } videoStyle={ style.remoteVideo } muted={true}>
                    {props.children}
                </VideoStream>
            </>
        );
    } else{
        return (
            <>
                {props.children}
            </>
        )
    }
    
};

export default RemoteVideo;