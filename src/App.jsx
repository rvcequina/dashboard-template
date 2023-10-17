import React,{ useState } from 'react'


import { BrowserRouter,Routes, Route,  Navigate } from "react-router-dom";

// views

import Dashboard from "@/views/admin/Dashboard";
import Maps from "@/views/admin/Maps";
import Settings from "@/views/admin/Settings";
import Tables from "@/views/admin/Tables";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

// layouts

import Admin from "@/layouts/Admin";
import Auth from "@/layouts/Auth";

// views without layouts

import Landing from "@/views/Landing";
import Profile from "@/views/Profile";
import Index from '@/views/Index';

function App() {
  const [count, setCount] = useState(0)

  const Authroute = () => {
    return (
      <div>
        <h2>Parent Component</h2>
        <Routes>
          
        </Routes>
      </div>
    );
  };



  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* add routes with layouts */}
          <Route path='admin'  element={<Admin/>}>
            <Route path="dashboard"  element={<Dashboard/>} />
            <Route path="maps"  element={<Maps/>} />
            <Route path="settings"  element={<Settings/>} />
            <Route path="tables"  element={<Tables/>} />
          </Route>
       
         
            
          
        
          
          <Route path="auth" element={<Auth/>}>
            <Route path="login" exact element={<Login/>} />
            <Route path="register" exact element={<Register/>} />
          </Route>
          {/* add routes without layouts */}
          <Route path="landing" exact element={<Landing/>} />
          <Route path="profile" exact element={<Profile/>} />
          <Route path="/" exact element={<Index/>} />
          {/* add redirect for first page */}
          {/* <Route
        path="*"
        element={<Navigate to="/" replace />}
    /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
