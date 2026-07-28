import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div style={{display: "flex" , gap: "40px", fontSize: "30px"}}>
      <NavLink to={"/"}>Main</NavLink>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </div>
  );
};

export default Navbar;
