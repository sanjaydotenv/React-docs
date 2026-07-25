import React from "react";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headset,
} from "lucide-react";

const Footer = () => {

     const features = [
    {
      icon: <Truck size={28} />,
      title: "Fast Delivery",
      desc: "Free delivery on all orders over ₹999",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Payment",
      desc: "100% safe and encrypted checkout",
    },
    {
      icon: <RotateCcw size={28} />,
      title: "Easy Returns",
      desc: "7-day hassle-free return policy",
    },
    {
      icon: <Headset size={28} />,
      title: "24/7 Support",
      desc: "Always here to help you anytime",
    },
  ];


  return (
    <footer className="bg-[#0F172A] text-white mt-20">
      {/* Top Features */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#1E293B] rounded-2xl p-6 flex gap-4 hover:bg-violet-600 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400">
              {item.icon}
            </div>

            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white-400">
              Lux<span className="text-violet-600">ora</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Premium shopping experience with trusted products.
            </p>
          </div>

          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-violet-400 transition">
              About
            </a>
            <a href="#" className="hover:text-violet-400 transition">
              Products
            </a>
            <a href="#" className="hover:text-violet-400 transition">
              Contact
            </a>
            <a href="#" className="hover:text-violet-400 transition">
              Privacy
            </a>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm py-5 border-t border-slate-800">
          © {new Date().getFullYear()} ShopSphere. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
