import React from "react";
import { Outlet, useLocation } from "react-router";
import { useAuthHook } from "../hooks/useAuthHook";

const AuthLayout = () => {
  const { loggedInUser , navigate} = useAuthHook();

  if (loggedInUser) {
    navigate("/main")
    return;
  }

  return <Outlet />;
};

export default AuthLayout;
