import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// components

import Navbar from "@/components/Navbars/AuthNavbar";
import FooterSmall from "@/components/Footers/FooterSmall";

// views

import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + "assets/img/register_bg_2.png" + ")",
            }}
          ></div>
      
          <Outlet/>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
