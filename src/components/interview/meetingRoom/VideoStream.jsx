import React, { useEffect, useRef } from 'react'

const VideoStream = (props) => {
    const { videoStream, videoContainerStyle, videoStyle, muted } = props;
    const videoRef = useRef();
    useEffect(()=>{
        if(videoStream){
            const localVideo = videoRef.current;
            localVideo.srcObject = videoStream;

            localVideo.onloadmetadata = ()=> {
                localVideo.play();
            }
        }
    }, [videoStream]);
    const style={
        centerTag: {
            overflow: 'hidden',
            height: '100%',
            borderRadius: '5px',
        },
    };
    return (
        <div style={ videoContainerStyle }>
            <center style={style.centerTag}>
                <video ref={videoRef} style={videoStyle} autoPlay muted={muted}></video>
            </center>
            {props.children}
        </div>
    );
};

export default VideoStream;