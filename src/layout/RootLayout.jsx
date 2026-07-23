import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="container min-h-screen">
      <Navbar />

      <Outlet />
    </div>
  );
}

export default RootLayout;
