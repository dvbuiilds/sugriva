import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import asyncLocalStorage from "../customObjects/asyncLocalStorage";
import { useDispatch } from "react-redux";
import { setCompleteUser } from "../redux/user/actions";

export const useUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const storedUser = await asyncLocalStorage.getItem("userPayload");

                if (storedUser) {
                    dispatch(setCompleteUser(JSON.parse(storedUser)));
                } else {
                    localStorage.clear();
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        })();
    }, [navigate, dispatch]);
    return ;
};
