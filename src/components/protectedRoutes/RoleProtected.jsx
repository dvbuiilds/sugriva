import { Navigate } from "react-router-dom";

const RoleProtected = ({ children }) => {
    let user = (JSON.parse(localStorage.getItem('userPayload')));
    if(user && (user.role === 'admin' || user.role === 'candidate')){
       return children;
    }
    localStorage.clear();
    return <Navigate to='/' replace />;
};

export default RoleProtected;