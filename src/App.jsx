import React,{ useState } from 'react'


import { BrowserRouter,Routes, Route,  Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";


// layouts

import Admin from "@/layouts/Admin";
import Auth from "@/layouts/Auth";

// views without layouts

import Landing from "@/views/Landing";
import Profile from "@/views/Profile";
import Index from '@/views/Index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* add routes with layouts */}
          <Route path="/admin" element={<Admin/>} />
          <Route path="/auth" element={<Auth/>} />
          {/* add routes without layouts */}
          <Route path="/landing" exact element={<Landing/>} />
          <Route path="/profile" exact element={<Profile/>} />
          <Route path="/" exact element={<Index/>} />
          {/* add redirect for first page */}
          <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
