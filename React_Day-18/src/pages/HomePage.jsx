import React from "react";
import { ArrowRight  } from "lucide-react";
import { NavLink } from "react-router";
import OverView from "../components/OverView";
import { ProductHook } from "../hook/useProductHook";

const HomePage = () => {
  const { overView } = ProductHook();


  return (
    <section className="relative overflow-hidden text-white">
      {/* Glow */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-8 py-24 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <p className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            ✨ Luxury Collection 2026
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Elevate Your
            <br />
            Everyday
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}
              Style
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-lg text-gray-400">
            Discover premium products crafted with elegance, comfort and modern
            luxury.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-semibold transition hover:scale-105">
              <NavLink to={"/mainlayout/shop"}>Shop Now</NavLink>
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 hover:border-violet-500">
              Explore
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-14 flex items-center gap-5">
            <div className="flex -space-x-3">
              <img
                className="h-12 w-12 rounded-full border-2 border-[#08070F]"
                src="https://i.pravatar.cc/100?img=1"
              />

              <img
                className="h-12 w-12 rounded-full border-2 border-[#08070F]"
                src="https://i.pravatar.cc/100?img=2"
              />

              <img
                className="h-12 w-12 rounded-full border-2 border-[#08070F]"
                src="https://i.pravatar.cc/100?img=3"
              />
            </div>

            <div>
              <h3 className="font-bold text-xl">2K+</h3>

              <p className="text-gray-400">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative">
          <div className="rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
              className="mx-auto h-[450px] object-contain drop-shadow-[0_20px_60px_rgba(124,92,255,.6)]"
            />

            <div className="absolute bottom-10 right-10 rounded-full bg-white/10 px-6 py-3 backdrop-blur-xl">
              ✨ New Arrival
            </div>
          </div>
        </div>

        <div className="flex w-[80vw] gap-5">
          {overView.map((data , idx) => {
            return <OverView key={idx} data={data} />
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
