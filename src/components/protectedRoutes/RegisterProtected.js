import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const RegisterProtected = ({ children }) => {
    const {user} = useUser();
    if(user && user.loggedIn){
        return <Navigate to='/candidate-dashboard' replace />
    }
    return children;
};

export default RegisterProtected;