import React from "react";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg-primary)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 shadow-[0_0_30px_rgba(124,92,255,.45)]">
            ✦
          </div>

          <h1 className="text-2xl font-bold tracking-wide text-white">
            Lux<span className="text-violet-400">ora</span>
          </h1>
        </div>

        {/* Menu */}

        <ul className="hidden lg:flex items-center gap-10 text-[15px] text-white cursor-pointer">
          <li>
            <NavLink 
            to={""}
            className={({isActive}) => 
                isActive ? "text-[var(--primary)] border-b border-[var(--primary-light)]" : ""
            }
            end
            >
            
            Home</NavLink>
          </li>

          <li><NavLink 
            to={"/mainlayout/shop"}
            className={({isActive}) => 
                isActive ? "text-[var(--primary)] border-b border-[var(--primary-light)]" : ""
            }
            >
            Shop</NavLink></li>

          <li><NavLink 
            to={"/mainlayout/about"}
            className={({isActive}) => 
                isActive ? "text-[var(--primary)] border-b border-[var(--primary-light)]" : ""
            }
            >
            About</NavLink></li>
        </ul>

        {/* Right */}

        <div className="flex items-center gap-4">
          <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-violet-500 hover:text-white hover:shadow-[0_0_20px_rgba(124,92,255,.35)]">
            <Search size={19} />
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-pink-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,.35)]">
            <Heart size={19} />
          </button>

          <button className="relative rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:border-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(91,140,255,.35)]">
            <ShoppingBag size={19} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-[10px] font-semibold text-white">
              2
            </span>
          </button>

          <button className="lg:hidden rounded-xl border border-white/10 bg-white/5 p-3 text-white">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
