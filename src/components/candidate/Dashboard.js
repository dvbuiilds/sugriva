import React from 'react'
import CandidateVerticalbar from './CandidateVerticalbar';

const Dashboard = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2 bg-light p-0' style={{height: '100vh'}}>
                        <CandidateVerticalbar/>
                    </div>
                    <div className='col-lg-10' ></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;