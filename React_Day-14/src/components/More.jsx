import React from "react";
import { Outlet, useNavigate } from "react-router";

const More = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-5">
      <h1 className="text-5xl">this is More</h1>
      <button onClick={() => navigate("/more/nested")} className="text-3xl px-5 py-2 bg-gray-300 rounded-xl">
        this is nested
      </button>
      <Outlet />
    </div>
  );
};

export default More;
