import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import NavRoutes from "../Routes/NavRoutes";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-white text-xl cursor-pointer font-semibold">
        <h1>logo</h1>
        <div className="flex items-center gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : ""
            }
          >
            About
          </NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/more">More</NavLink>
        </div>
        <h1>login</h1>
      </div>
      <NavRoutes />
    </div>
  );
};

export default Navbar;
