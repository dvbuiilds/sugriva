import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const CandidateProtected = ({ children }) => {
    const {user} = useUser();
    if(user && user.role !== 'candidate'){
        alert('You are not candidate.');
        return <Navigate to="/login" replace/>;
    }
    if(!user || !user.loggedIn){
        alert('Log in via Candidate Account.');
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default CandidateProtected;