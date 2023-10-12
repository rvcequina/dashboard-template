import React from "react";
import { Routes, Route, Navigate,Outlet } from "react-router-dom";

// components

import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";

// views

import Dashboard from "@/views/admin/Dashboard";
import Maps from "@/views/admin/Maps";
import Settings from "@/views/admin/Settings";
import Tables from "@/views/admin/Tables";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/admin/dashboard" exact element={<Dashboard/>} />
            <Route path="/admin/maps" exact element={<Maps/>} />
            <Route path="/admin/settings" exact element={<Settings/>} />
            <Route path="/admin/tables" exact element={<Tables/>} />
            
            <Route
                path="/admin"
                element={<Navigate to="/admin/dashboard" replace />}
            />
          </Routes>
          <FooterAdmin />
        </div>
      
      </div>
    </>
  );
}
