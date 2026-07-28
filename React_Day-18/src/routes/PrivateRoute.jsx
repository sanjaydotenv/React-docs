import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContextAPI } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContextAPI);

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
