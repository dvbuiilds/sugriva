import { Navigate } from "react-router-dom";

const RegisterProtected = ({ children }) => {
    let user = (JSON.parse(localStorage.getItem('userPayload')));
    if(user && user.loggedIn){
        return <Navigate to='/candidate-dashboard' replace />
    }
    return children;
};

export default RegisterProtected;