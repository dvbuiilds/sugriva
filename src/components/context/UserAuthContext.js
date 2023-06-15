import { createContext, useState } from "react";

export const UserAuthContext = createContext();

export const UserAuthState = (props)=>{
    const [user, setUser] = useState({
        loggedIn: false,
        role: '',
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        id: '',
        authToken: ''
    });
    return(
        <UserAuthContext.Provider value={{user, setUser}}>
            {props.children}
        </UserAuthContext.Provider>
    );
};