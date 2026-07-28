import React, { useContext, useState } from "react";
import { Search, ShoppingBag, Menu, LogOut, User, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { ProductHook } from "../hook/useProductHook";
import { AuthContextAPI } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount } = ProductHook();
  const { logout, currentUser } = useContext(AuthContextAPI);

  const [screenSize, setScreenSize] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg-primary)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div
          onClick={() => navigate("/mainlayout")}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 shadow-[0_0_30px_rgba(124,92,255,.45)]">
            ✦
          </div>

          <h1 className="text-lg sm:text-2xl font-bold tracking-wide text-white">
            Lux<span className="text-violet-400">ora</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-[15px] text-white">
          <li>
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                isActive
                  ? "text-[var(--primary)] border-b border-[var(--primary-light)] pb-1"
                  : "hover:text-violet-400 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/mainlayout/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-[var(--primary)] border-b border-[var(--primary-light)] pb-1"
                  : "hover:text-violet-400 transition"
              }
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/mainlayout/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[var(--primary)] border-b border-[var(--primary-light)] pb-1"
                  : "hover:text-violet-400 transition"
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search - Desktop Only */}
          <button
            onClick={() => navigate("/mainlayout/shop")}
            className="hidden lg:flex rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-violet-500 hover:text-white hover:shadow-[0_0_20px_rgba(124,92,255,.35)]"
          >
            <Search size={18} />
          </button>

          {/* User */}
          <button className="rounded-xl border border-white/10 bg-white/5 px-2 sm:px-3 py-2 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white font-semibold">
              {currentUser?.name?.[0]?.toUpperCase()}
            </span>

            <span className="hidden md:block text-gray-300">
              {currentUser?.name}
            </span>
          </button>

          {/* Cart */}
          <button
            onClick={() => navigate("/mainlayout/cart")}
            className="relative rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(91,140,255,.35)]"
          >
            <ShoppingBag size={18} />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-[10px] font-semibold text-white">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>

          {/* Logout - Desktop Only */}
          <button
            onClick={handleLogout}
            className="hidden lg:flex rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(255,80,80,.35)]"
          >
            <LogOut size={18} />
          </button>

          {/* Mobile Menu */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setScreenSize(!screenSize)}
              className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition hover:border-violet-500"
            >
              {screenSize ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div
              className={`absolute right-0 top-14 w-60 rounded-2xl border border-white/10 bg-[#111827]/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                screenSize
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              <NavLink
                to="/mainlayout"
                end
                onClick={() => setScreenSize(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-3 transition ${
                    isActive
                      ? "bg-violet-500/20 text-violet-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <User size={18} />
                Home
              </NavLink>

              <NavLink
                to="/mainlayout/shop"
                onClick={() => setScreenSize(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-3 transition ${
                    isActive
                      ? "bg-violet-500/20 text-violet-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <ShoppingBag size={18} />
                Shop
              </NavLink>

              <NavLink
                to="/mainlayout/about"
                onClick={() => setScreenSize(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-3 transition ${
                    isActive
                      ? "bg-violet-500/20 text-violet-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <User size={18} />
                About
              </NavLink>

              <div className="border-t border-white/10"></div>

              {/* Search */}
              <button
                onClick={() => {
                  navigate("/mainlayout/shop");
                  setScreenSize(false);
                }}
                className="flex w-full items-center gap-3 px-5 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition"
              >
                <Search size={18} />
                Search
              </button>

              {/* Logout */}
              <button
                onClick={() => {
                  setScreenSize(false);
                  handleLogout();
                }}
                className="flex w-full items-center gap-3 px-5 py-3 text-red-400 hover:bg-red-500/10 transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
