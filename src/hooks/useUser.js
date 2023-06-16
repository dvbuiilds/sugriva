// import { useContext, useEffect, useState } from "react";
// import { UserAuthContext } from "../components/context/UserAuthContext";
// import { useNavigate } from "react-router-dom";

// export const useUser = () => {
//   const navigate = useNavigate();
// //   const { user, setUser } = useContext(UserAuthContext);
//     const [user, setUser] = await useState({});
//   useEffect(() => {
//     const fetchUser = () => {
//       try {
//         const storedUser = localStorage.getItem("userPayload");

//         if (storedUser) {
//           setUser(JSON.parse(storedUser));
//         } else {
//           localStorage.clear();
//           navigate("/login");
//         }
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };
//     fetchUser();
//   }, []);

//   return { user, setUser };
// };
