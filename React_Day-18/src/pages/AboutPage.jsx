import React from "react";
import { Sparkles, ShieldCheck, Truck, Headset } from "lucide-react";
import { NavLink } from "react-router";

const C = {
  bg: "#0B0B12",
  surface: "#15151f",
  text: "#F5F5FA",
  muted: "#9A9AB0",
  blue: "#3B82F6",
  violet: "#8B5CF6",
  pink: "#EC4899",
  line: "rgba(139,92,246,.18)",
};

const gradient = `linear-gradient(120deg, ${C.blue}, ${C.violet}, ${C.pink})`;

const features = [
  {
    icon: <ShieldCheck size={26} />,
    title: "Trusted Quality",
    desc: "Every product is hand-picked to ensure premium quality and long-lasting performance.",
  },
  {
    icon: <Truck size={26} />,
    title: "Fast Delivery",
    desc: "Quick shipping with secure packaging so your order reaches safely.",
  },
  {
    icon: <Headset size={26} />,
    title: "24/7 Support",
    desc: "Need help? Our support team is always ready to assist you.",
  },
];



const About = () => {
  return (
    <div
      style={{ background: C.bg, color: C.text }}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* ---------------- HERO CARD ---------------- */}

        <div
          className="relative overflow-hidden rounded-[35px] p-10 md:p-16"
          style={{
            background: C.surface,
            border: `1px solid ${C.line}`,
          }}
        >
          <div
            className="absolute -top-28 -right-28 w-80 h-80 rounded-full blur-3xl opacity-30"
            style={{ background: gradient }}
          />

          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              color: C.violet,
              border: `1px solid ${C.line}`,
            }}
          >
            <Sparkles size={15} />
            About Luxora
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-8 leading-tight">
            Premium Shopping
            <br />
            <span
              style={{
                backgroundImage: gradient,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Made Simple
            </span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg leading-8"
            style={{ color: C.muted }}
          >
            Luxora is built for people who love premium products, fast delivery
            and a smooth shopping experience. We carefully curate every product
            so you spend less time searching and more time enjoying.
          </p>
        </div>

        {/* ---------------- ABOUT CARD ---------------- */}

        <div
          className="mt-14 rounded-[35px] p-10 md:p-12"
          style={{
            background: C.surface,
            border: `1px solid ${C.line}`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold">Our Story</h2>

              <p className="mt-6 leading-8" style={{ color: C.muted }}>
                Luxora started with one simple idea — online shopping should
                feel beautiful, easy and trustworthy.
              </p>

              <p className="mt-4 leading-8" style={{ color: C.muted }}>
                Instead of thousands of random products, we focus on carefully
                selected items that deliver the best quality and value.
              </p>
            </div>

            <div
              className="rounded-3xl p-10 h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(120deg,#3B82F6,#8B5CF6,#EC4899)",
              }}
            >
              <h2 className="text-6xl font-black text-white">
                2K+
                <br />
                <span className="text-2xl font-medium">Happy Customers</span>
              </h2>
            </div>
          </div>
        </div>

        {/* ---------------- FEATURE CARDS ---------------- */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] p-8 transition-all duration-500 hover:-translate-y-3"
              style={{
                background: C.surface,
                border: `1px solid ${C.line}`,
              }}
            >
              <div
                className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"
                style={{ background: gradient }}
              />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                style={{ backgroundImage: gradient }}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-8">{item.title}</h3>

              <p className="mt-4 leading-7" style={{ color: C.muted }}>
                {item.desc}
              </p>

              <div
                className="mt-8 h-1 rounded-full w-16 group-hover:w-full transition-all duration-500"
                style={{ backgroundImage: gradient }}
              />
            </div>
          ))}
        </div>
        {/* ---------------- STATS ---------------- */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            ["2K+", "Happy Customers"],
            ["60+", "Premium Products"],
            ["4.9★", "Average Rating"],
            ["24/7", "Customer Support"],
          ].map(([value, label], index) => (
            <div
              key={index}
              className="rounded-[28px] p-8 text-center transition duration-300 hover:-translate-y-2"
              style={{
                background: C.surface,
                border: `1px solid ${C.line}`,
              }}
            >
              <h2
                className="text-5xl font-black"
                style={{
                  backgroundImage: gradient,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {value}
              </h2>

              <p className="mt-3" style={{ color: C.muted }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* ---------------- CTA ---------------- */}

        <div
          className="mt-20 rounded-[35px] p-12 text-center overflow-hidden relative"
          style={{
            backgroundImage: gradient,
          }}
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready To Start Shopping?
            </h2>

            <p className="text-white/80 mt-5 max-w-2xl mx-auto leading-8">
              Discover premium products, fast delivery and an experience
              designed to make online shopping enjoyable.
            </p>

            <button className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              <NavLink to={"/mainlayout/shop"}>Explore Store</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
