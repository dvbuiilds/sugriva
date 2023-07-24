import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingUp from "../candidate/SingUp";
import Dashboard from "../candidate/Dashboard";
import Login from "../candidate/Login";
import CandidateProtected from "../protectedRoutes/CandidateProtected";
import RegisterProtected from "../protectedRoutes/RegisterProtected";
import Forms from "../candidate/Form/Forms";
import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../admin/AdminDashboard";
import AdminProtected from "../protectedRoutes/AdminProtected";
import Meeting from "../interview/Meeting";
import WaitingRoom from "../interview/WaitingRoom";
import MeetingRoom from "../interview/meetingRoom/MeetingRoom";
import JoinMeeting from "../interview/meetingRoom/JoinMeeting";
import RoleProtected from "../protectedRoutes/RoleProtected";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/** For candidate role */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<RegisterProtected><SingUp/></RegisterProtected>} />
          <Route path="/login" element={<RegisterProtected><Login/></RegisterProtected>} />
          <Route path="/candidate-dashboard" element={<CandidateProtected ><Dashboard /></CandidateProtected>} />
          <Route path="/candidate-form" element={<CandidateProtected ><Forms /></CandidateProtected>} />
          
          {/** For both roles */}
          <Route path='/meeting' element={<RoleProtected><Meeting /> </RoleProtected> } />
          <Route path='/wtgri-AXUHSD' element={<RoleProtected><WaitingRoom /> </RoleProtected>} />
          <Route path='/meeting/:id' element={<RoleProtected><MeetingRoom /> </RoleProtected>} />
          <Route path='/join/:id' element={<RoleProtected><JoinMeeting /> </RoleProtected>} />

          {/** For admin role */}
          <Route path="/admin" element={<RegisterProtected><AdminLogin/></RegisterProtected>} />
          <Route path="/admin-dashboard" element={<AdminProtected><AdminDashboard /></AdminProtected>} /></Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;