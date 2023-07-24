import React from 'react'
import { Link } from 'react-router-dom';
import AdminVerticalbar from './AdminVerticalbar';
import CandidateData from './candidateData/CandidateData';

const AdminDashboard = () => {

    return (
        <>
            <div className='container-fluid'>
                <div className='row my-4'>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-8'><Link className='text-decoration-none nav-link' to='/admin-dashboard'><p className='h3' style={{textAlign: 'center'}}>Sugriva's Admin Dashboard</p></Link></div>
                    <div className='col-md-2'></div>
                </div>
            </div>
            <div className='container-fluid' style={{height: '100vh'}}>
                <div className="row" style={{ height: '100%'}}>
                    <div className='col-md-2'>
                        <AdminVerticalbar />
                    </div>
                    <div className='col-md-10 bg-light rounded px-3' style={{ height: '100%' }}>
                        <CandidateData />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;