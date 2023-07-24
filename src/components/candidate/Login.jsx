import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import asyncLocalStorage from '../../customObjects/asyncLocalStorage';
import { useDispatch } from 'react-redux';
import { setCompleteUser } from '../../redux/user/actions';

const Login = () => {
    // states   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitFn = async (event) => {
        event.preventDefault();
        const responseCall = await fetch(
            'http://localhost:5000/api/auth/login',
            {
                method: "POST",
                mode: "cors",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            }
        );

        const candidateResponse = await responseCall.json();
        if(candidateResponse.candidateData){
            const candidate = candidateResponse.candidateData;
            const userPayload = {
                loggedIn: true,
                role: 'candidate',
                firstName: candidate.firstName,
                lastName: candidate.lastName,
                userName: candidate.userName,
                email: candidate.email,
                id: candidate._id,
                authToken: candidate.authToken,
                profile: candidate.profile?true: null
            };

            // store dispatch methods.
            dispatch(setCompleteUser(userPayload));

            await asyncLocalStorage.setItem('userPayload', JSON.stringify(userPayload));
            navigate('/candidate-dashboard');
        } else{
            alert("Invalid Credentials.");
        }
    };

    return (
    <div className="container row mx-auto">
        <div className='row text-center'>
            <p className='h1 my-3'>Sugriva</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 p-4 border rounded-1 ">
            <div className='row text-center'>
                <p className='h4'>Candidate Account Login</p>
                <p className=''>Grow more with Sugriva</p>
            </div>
        <form name="myform" onSubmit={ onSubmitFn }>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" value="Submit" className="btn btn-primary">Login</button>
            <Link className="px-5 " to="/signup">New user? Sign Up</Link>
        </form>
        </div>
        <div className="col-lg-4"></div>
        
    </div>
    );
};

export default Login;