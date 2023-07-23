import React from 'react';
import { useSelector } from 'react-redux';
import VideoStream from './VideoStream';


const LocalVideo = () => {
    const { localStream } = useSelector( state=> state.stream );
    const style = {
        localVideoContainer: {
            position: 'absolute', 
            bottom: '5vh', 
            right: '2vw', 
            borderRadius: '5px', 
            height: '15vh', 
            width: '20vw', 
            overflow: 'hidden',
            boxShadow: "1px 1px 1px 1px #000",
            backgroundColor: 'black'
        },
        localVideo: {
            height: '15vh', 
            width: '20vw',
            borderRadius: '5px'
        },
    };

    return (
        <>
            <VideoStream videoStream={localStream} videoContainerStyle={style.localVideoContainer} videoStyle={style.localVideo} muted={true} />
        </>
    );
};

export default LocalVideo;