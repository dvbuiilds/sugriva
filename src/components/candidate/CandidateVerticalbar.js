import React, { useContext } from 'react'
import Img from '../ui/Img'
import { Link, useNavigate } from 'react-router-dom';
import {FiLogOut } from 'react-icons/fi';
import {MdOutlineAssessment, MdMeetingRoom} from 'react-icons/md';
import {BsBook} from "react-icons/bs";
import {AiOutlineFile, AiOutlineProfile, AiOutlineSetting} from 'react-icons/ai';
import { UserAuthContext } from '../context/UserAuthContext';

const CandidateVerticalbar = () => {
    let user = JSON.parse(localStorage.getItem('userPayload'));
    const {setUser} = useContext(UserAuthContext);
    const navigate = useNavigate();

    const logoutFn = async ()=>{
        // calling the api as well.
        const logoutCall = await fetch(
            'http://localhost:5000/api/auth/candidate-logout',
            {
                method: "GET",
                mode: "cors",
                headers: { 
                    'Content-Type': 'application/json',
                    'authToken': user.authToken
                }
            }
        );

        const logoutRes = await logoutCall.json();
        console.log('Res received', logoutRes);
        setUser({});
        if(!logoutRes.success){
            alert('Some internal error occured. Try clearing the site data.');
        }
        localStorage.clear();
        navigate('/login');
    };
  return (
    <>
        <div 
        className="d-flex flex-column flex-shrink-0 bg-transparent" 
        style={{width: "100%"}}>
            <Link className="mb-4 h2 text-center link-dark text-decoration-none" to='/candidate-dashboard'>Sgv Dashboard</Link>
            <div className='mx-auto text-center'><Img src={'dp-placeholder.png'}/></div>
            <p className='fs-5 text-center'>Hi <strong>{user.userName}</strong>!</p>
            <div style={{height: "15px"}}></div>

            <ul className="nav nav-pills flex-column ">
            <li>
                <Link to="/resume" className="nav-link link-dark fs-5"><AiOutlineFile/> &nbsp;My Resume
                </Link>
            </li>
            <li>
                <Link to="/module" className="nav-link link-dark fs-5"><BsBook/> &nbsp;Module
                </Link>
            </li>
            <li>
                <Link to="/assessment" className="nav-link link-dark fs-5"><MdOutlineAssessment/> &nbsp;Assessment
                </Link>
            </li>
            <li>
                <Link to="/interview" className="nav-link link-dark fs-5"><MdMeetingRoom/> &nbsp;Interview
                </Link>
            </li>
            <li>
                <Link to="/profile" className="nav-link link-dark fs-5"><AiOutlineProfile/> &nbsp;Profile
                </Link>
            </li>
            <li>
                <Link to="/settings" className="nav-link link-dark fs-5"><AiOutlineSetting/> &nbsp;Settings
                </Link>
            </li>
            <li>
                <Link className="nav-link link-dark fs-5" onClick={async()=>{ await logoutFn(); }}><FiLogOut/> &nbsp;Logout
                </Link>
            </li>
            </ul>
        </div>
    </>
  )
}

export default CandidateVerticalbar;