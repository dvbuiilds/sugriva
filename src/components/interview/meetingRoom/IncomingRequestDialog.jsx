import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCallerUsername } from '../../../redux/stream/actions';
import { entryAccepted, entryDenied } from '../../../utils/webRTCHandler';

const IncomingRequestDialog = () => {
    const hiddenModalBtnRef = useRef(null);
    const { callerUsername } = useSelector(state => state.stream);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(callerUsername.length > 0){
            hiddenModalBtnRef.current.click();
            setTimeout(() => { 
                dispatch(setCallerUsername(''));
            }, 60000);
        }
        
    }, [callerUsername, hiddenModalBtnRef, dispatch]);

    const style = {
        hiddenModalBtn: {
            position: 'absolute', 
            zIndex: '-1', 
            display: 'none',
        },
    };

    const handleAdmitBtnClick = ()=>{
        entryAccepted();
    };

    const handleDenyBtnClick = ()=>{
        entryDenied();
    };

    return (
        <>
            <button ref={ hiddenModalBtnRef } style={ style.hiddenModalBtn } type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Incoming Join Request</h1>
                        </div>
                        <div className="modal-body">
                            {callerUsername} wants to join the meet
                        </div>
                        <div className="modal-footer">
                            <button onClick={ handleDenyBtnClick } type="button" className="btn btn-secondary" data-bs-dismiss="modal">Deny</button>
                            <button onClick={ handleAdmitBtnClick } type="button" className="btn btn-primary" data-bs-dismiss="modal">Admit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IncomingRequestDialog;