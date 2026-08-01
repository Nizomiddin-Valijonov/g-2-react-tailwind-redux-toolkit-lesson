import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-blue-500 flex items-center justify-between px-4 py-3">
      <h2 className="text-white text-xl">Logo</h2>

      <nav className="flex gap-5 text-white">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        <NavLink to={"/form"}>Form</NavLink>
        <NavLink to={"/pomodoro"}>Pomodoro</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
