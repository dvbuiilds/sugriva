import React from 'react'
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const logoutFn = ()=>{
        localStorage.clear();
    };
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2'><Link className='text-decoration-none nav-link' to='/'><p>Notes</p></Link></div>
                    <div className='col-md-8'><Link className='text-decoration-none nav-link' to='/admin-dashboard'><p className='h4' style={{textAlign: 'center'}}>Sugriva's Admin</p></Link></div>
                    <div className='col-md-2'><Link className='text-decoration-none nav-link' to='/admin'><p style={{textAlign: "right"}} onClick={ logoutFn }>Logout</p></Link></div>
                </div>
                <div className='row'>
                    <p className='h2' style={{textAlign: 'center'}}>Admin Dashboard</p>
                </div>
            </div>
            <div className='container-fluid row'>
                <div className='col-md-3 border border-primary'>
                    <div className='bg-light' style={{height: "100vh"}}>
                        <ul className="nav nav-pills flex-column ">
                            <li>
                                <Link to="/candidates" className="nav-link link-dark fs-5"> &nbsp;Candidates</Link>
                            </li>
                            <li>
                                <Link to="/take-interview" className="nav-link link-dark fs-5"> &nbsp;Take Interview</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-9 border border-primary' style={{textAlign: "center"}}>Data</div>
            </div>
        </>
    )
}

export default AdminDashboard