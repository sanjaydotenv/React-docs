import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
