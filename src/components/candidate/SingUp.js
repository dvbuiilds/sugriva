import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';

const SingUp = () => {
    // states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    // onChange function


    // Checking if both passwords match or not.
    const checkingPasswords = (pass1, pass2) =>{
        if(pass1.length < 6 || pass2.length < 6 || pass1 !== pass2){
            return false;
        }
        return true;
    }
    
    // eslint-disable-next-line
    const onSubmitFn = async (event) => {
        console.log('Candidate account creation');
        event.preventDefault();
        if(!checkingPasswords(password, confirmPassword)){
            alert('Password should match.');
            return false;
        }
        const responseCall = await fetch(
            'http://localhost:5000/api/auth/signup',
            {
                method: "POST",
                mode: "cors",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({firstName, lastName, userName, email, password})
            }
        );

        const candidateResponse = await responseCall.json();
        // console.log(candidateResponse);
        if(candidateResponse.success){
            console.log(candidateResponse);
            navigate('/login');
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
                <p className='h4'>Create a Candidate Account</p>
                <p className=''>Give assessments, build profile and get hired!</p>
            </div>
            <form name="myform" onSubmit={ onSubmitFn }>
                <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" name="firstName" value={firstName} onChange={event => setFirstName(event.target.value)} className="form-control" id="firstName" aria-describedby="firstNameHelp"/>
                </div>
                <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" name="lastName" value={lastName} onChange={event => setLastName(event.target.value)} className="form-control" id="lastName" aria-describedby="lastNameHelp"/>
                </div>
                <div className="mb-3">
                <label htmlFor="userName" className="form-label">User Name</label>
                <input required type="text" name="userName" value={userName} onChange={event => setUserName(event.target.value)} className="form-control" id="userName" aria-describedby="userNameHelp"/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input required type="email" name="email" value={email} onChange={event => setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input required type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleConfirmPassword1" className="form-label">Confirm Password</label>
                <input required type="password" name="confirmPassword" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} className="form-control" id="exampleConfirmPassword1"/>
                </div>
                <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                <Link className="px-3 " to="/login">Already signed up? Log in</Link>
            </form>
        </div>
        <div className="col-lg-4"></div>
    </div>
    );
};

export default SingUp;