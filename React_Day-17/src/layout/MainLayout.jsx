import React from "react";
import Sidebar from "../components/Sidebar";
import { Navigate, Outlet } from "react-router";
import { useAuthHook } from "../hooks/useAuthHook";

const MainLayout = () => {
  const { loggedInUser, navigate } = useAuthHook();

  if (!loggedInUser) {
    navigate("/");
    return;
  }

  return (
    <div className="grid grid-cols-[280px_1fr] min-h-screen">
      <Sidebar />

      <main className=" p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
