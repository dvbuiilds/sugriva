import { useContext, useEffect } from "react";
import { UserAuthContext } from "../components/context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import asyncLocalStorage from "../customObjects/asyncLocalStorage";

export const useUser = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserAuthContext);
    useEffect(() => {
        (async () => {
            try {
                const storedUser = await asyncLocalStorage.getItem("userPayload");

                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                } else {
                    localStorage.clear();
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        })();
    }, [navigate, setUser]);

  return { user, setUser };
};
