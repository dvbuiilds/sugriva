import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../context/UserAuthContext';
import asyncLocalStorage from '../../customObjects/asyncLocalStorage';

const AdminLogin = () => {
    // states   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserAuthContext);
    // hooks
    const navigate = useNavigate();

    const onSubmitFn = async (event) => {
        event.preventDefault();
        try{
            const responseCall = await fetch(
                'http://localhost:5000/api/admin/login',
                {
                    method: "POST",
                    mode: "cors",
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({email, password})
                }
            );

            const adminResponse = await responseCall.json();
            if(adminResponse.adminData){
                const admin = adminResponse.adminData;
                const userPayload = {
                    loggedIn: true,
                    role: 'admin',
                    firstName: admin.firstName,
                    lastName: admin.lastName,
                    userName: admin.userName,
                    email: admin.email,
                    id: admin._id,
                    authToken: admin.authToken,
                    profile: admin.profile?true: null
                };
                setUser(userPayload);
                await asyncLocalStorage.setItem('userPayload', JSON.stringify(userPayload));
                navigate('/admin-dashboard');
            } else{
                alert("Invalid Credentials.");
            }
        } catch(error){
            alert(error.message);
            console.log(error.message);
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
                <p className='h4'>Admin Account Login</p>
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
            {/* <Link className="px-5 " to="/signup">New user? Sign Up</Link> */}
        </form>
        </div>
        <div className="col-lg-4"></div>
        
    </div>
    );
};

export default AdminLogin;