import React from 'react';
import CandidateVerticalbar from './CandidateVerticalbar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useUser } from '../../hooks/useUser';

const Dashboard = () => {
    useUser();
    const { profile } = useSelector( state => state.user );
    const navigate = useNavigate();
    const onClickFn = ()=>{
        navigate('/candidate-form');
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2 bg-light p-0' style={{height: '100vh'}}>
                        <CandidateVerticalbar/>
                    </div>
                    <div className='col-lg-10' style={{paddingTop: '100px', paddingLeft: '20px'}}>
                        {!profile ?(
                                <div className='row'>
                                    <div className='container-fluid rounded bg-light p-3'>
                                        <p>Get ready for more opportunities!</p>
                                        <button className='btn btn-primary' onClick={()=>{onClickFn();}}>Start Now</button>
                                    </div>
                                </div>
                            ):(<></>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;