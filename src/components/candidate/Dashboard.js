import React from 'react'
import { useSelector } from 'react-redux';
import { Link,
     useNavigate
    } from 'react-router-dom'

const Dashboard = () => {
    const user = useSelector((state)=>{ return state.auth; });

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
        if(!logoutRes.success){
            alert('Some internal error occured. Try clearing the site data.');
        }
        localStorage.clear();
        navigate('/login');
    };

    return (
        <>
            {/* {location.state.candidate.firstName} */}
            <nav className="navbar navbar-light bg-primary">
                <div className=' px-2'>
                    <Link className='navbar-brand text-white' to="/candidate-dashboard">Sugriva Dashboard</Link>
                    <Link className='text-white' onClick={async ()=>{await logoutFn();}}>Logout</Link>
                </div>
            </nav>  
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2' style={{backgroundColor: "red", height: "10px"}}>
                        {user.userName}
                    </div>
                    <div className='col-lg-10' ></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard