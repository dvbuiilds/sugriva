import React from 'react'
import Img from '../ui/Img'
import { Link } from 'react-router-dom';
import {FiLogOut } from 'react-icons/fi';
import {MdMeetingRoom} from 'react-icons/md';
import {AiOutlineFile} from 'react-icons/ai';
import { useSelector } from 'react-redux';

const AdminVerticalbar = () => {
    const { userName } = useSelector( state => state.user );

    const logoutFn = ()=>{
        localStorage.clear();
    };

    return (
        <>
            <div 
            className="d-flex flex-column flex-shrink-0 bg-transparent" 
            style={{width: "100%"}}>
                <div className='mx-auto text-center'><Img src={'dp-placeholder.png'}/></div>
                <p className='fs-5 text-center'>Hi <strong>{userName}</strong>!</p>
                <div style={{height: "15px"}}></div>

                <ul className="nav nav-pills flex-column ">
                    <li>
                        <Link to="/admin-dashboard" className="nav-link link-dark fs-5"><AiOutlineFile/> &nbsp;Candidate Data</Link>
                    </li>
                    <li>
                        <Link to="/meeting" className="nav-link link-dark fs-5"><MdMeetingRoom/> &nbsp;Take Interview</Link>
                    </li>
                    <li>
                        <Link to="/admin" className="nav-link link-dark fs-5" onClick={ logoutFn }><FiLogOut/> &nbsp;Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AdminVerticalbar;