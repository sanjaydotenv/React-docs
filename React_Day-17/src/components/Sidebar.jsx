import React from "react";
import {
  FiHome,
  FiUser,
  FiShoppingBag,
  FiSettings,
  FiLogOut,
  FiBell,
} from "react-icons/fi";
import { useAuthHook } from "../hooks/useAuthHook";

const Sidebar = () => {
  const { navigate, LogoutHandler } = useAuthHook();

  return (
    <aside className="w-62 h-screen bg-slate-900 text-white  flex flex-col justify-between p-6 sticky left-0 top-0">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold tracking-wide text-cyan-400">
          MyApp
        </h1>

        {/* Navigation */}
        <nav className="mt-10">
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => navigate("/main")}
                className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
              >
                <FiShoppingBag size={20} />
                <span>Product</span>
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/main/user")}
                className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
              >
                <FiUser size={20} />
                <span>Users</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Profile */}
      <div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800">
          <img
            src="https://images.unsplash.com/photo-1623984109622-f9c970ba32fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold">Sanjay_dot_env</h3>
            <p className="text-sm text-gray-400">Frontend Developer</p>
          </div>
        </div>

        <button
          onClick={() => {
            LogoutHandler();
            navigate("/");
          }}
          className="mt-5 w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
        >
          <FiLogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
