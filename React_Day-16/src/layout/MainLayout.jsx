import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { Auth } from "../context/AuthProvider";

const MainLayout = () => {
  const { loggedInUser } = useContext(Auth);

  console.log(loggedInUser)

  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default MainLayout;
