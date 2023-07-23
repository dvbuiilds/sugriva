import { Navigate } from "react-router-dom";

const RegisterProtected = ({ children }) => {
    let user = (JSON.parse(localStorage.getItem('userPayload')));
    if(user){
        switch(user.role){
            case 'candidate':
                return <Navigate to='/candidate-dashboard' replace />;
            
            case 'admin':
                return <Navigate to='/admin-dashboard' replace />;

            default:
                return <Navigate to='/' replace />;
        }
    }
    // if(user && user.loggedIn){
    //     return <Navigate to='/candidate-dashboard' replace />
    // }
    return children;
};

export default RegisterProtected;