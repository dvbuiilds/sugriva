import React, { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup';
import ButtonChat from './ButtonChat';

const BottomBar = (props) => {
    const { meetingCode } = props;
    const [currentTime, setCurrentTime] = useState(new Date());
    const style = {
        meetingCode: {
            fontWeight: '500',
            fontSize: '20px'
        }
    };

    const getTimeString = ()=>{
        return currentTime.getHours() + ':' + currentTime.getMinutes();
    };

    useEffect(()=>{
        setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    });

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row p-0 m-0 align-items-center">
                    <div className="col-md-3 justify-content-center text-center"><span style={style.meetingCode}>{ getTimeString() +' | '+ meetingCode }</span></div>
                    <div className="col-md-6 justify-content-center text-center"><ButtonGroup /></div>
                    <div className="col-md-3 justify-content-center text-right"><ButtonChat /></div>
                </div>
            </div>
        </>
    );
};

export default BottomBar;