import { Navigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
    let user = (JSON.parse(localStorage.getItem('userPayload')));
    if(user && user.role !== 'admin'){
        alert('You are not admin.');
        if(user.role === 'admin'){
            return <Navigate to='/admin-dashboard' replace />;
        }
        localStorage.clear();
        return <Navigate to="/admin" replace/>;
    }
    if(!user || !user.loggedIn){
        alert('Log in via Admin Account.');
        return <Navigate to="/admin" replace />;
    }
    return children;
};

export default AdminProtected;