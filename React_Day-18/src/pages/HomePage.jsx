import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import OverView from "../components/OverView";
import { ProductHook } from "../hook/useProductHook";
import Category from "../components/Category";
import Footer from "../components/Footer";

const HomePage = () => {
  const { overView, productIcon } = ProductHook();

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
            <NavLink
              to={"/mainlayout/shop"}
              className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 font-semibold transition hover:scale-105"
            >
              Shop Now
            </NavLink>

            <NavLink
              to={"/mainlayout/shop"}
              className="flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 hover:border-violet-500"
            >
              Explore
              <ArrowRight size={18} />
            </NavLink>
          </div>

          <div className="mt-14 flex items-center gap-5">
            <div className="flex -space-x-3">
              <img
                className="h-12 w-12 rounded-full border-2 border-[#08070F]"
                src="https://i.pravatar.cc/100?img=1"
                alt="Customer"
              />
              <img
                className="h-12 w-12 rounded-full border-2 border-[#08070F]"
                src="https://i.pravatar.cc/100?img=2"
                alt="Customer"
              />
              <img
                className="h-12 w-12 rounded-full border-2 border-[#08070F]"
                src="https://i.pravatar.cc/100?img=3"
                alt="Customer"
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
          <div className="rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl ">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
              className="mx-auto h-[450px] object-contain drop-shadow-[0_20px_60px_rgba(124,92,255,.6)]"
              alt="Featured product"
            />
            <div className="absolute bottom-10 right-10 rounded-full bg-white/10 px-6 py-3 backdrop-blur-xl">
              ✨ New Arrival
            </div>
          </div>
        </div>
      </div>

      {/* OVERVIEW STATS — moved outside the 2-col hero grid so it can use
          the full container width instead of overflowing at 80vw inside a
          50%-wide grid column */}
      <div className="mx-auto max-w-7xl px-8 pb-16">
        <div className="flex flex-wrap gap-5">
          {overView.map((data, idx) => (
            <OverView key={idx} data={data} />
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="mx-auto max-w-7xl px-8 pb-24">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">
          Shop By{" "}
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
            Category
          </span>
        </h2>

        <div className="flex flex-wrap gap-5">
          {productIcon.map((data, idx) => (
            <Category key={idx} data={data} />
          ))}
        </div>
      </div>

      <hr className="border-white/10" />

      <Footer />
    </section>
  );
};

export default HomePage;
