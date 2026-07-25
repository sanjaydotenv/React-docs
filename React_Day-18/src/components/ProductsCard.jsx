import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { ProductHook } from "../hook/useProductHook";

const ProductsCard = ({ data }) => {
  console.log(data)
  return (
    <div className="group w-[270px] overflow-hidden rounded-[28px] border border-white/10 bg-[#15151d] transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_20px_50px_rgba(124,77,255,.18)]">
      {/* Image Section */}
      <div className="relative bg-white p-4">
        <span className="absolute left-4 top-4 rounded-full bg-gray-600 px-3 py-1 text-xs font-medium text-white">
          {data.category}
        </span>

        <img
          src={data.image}
          alt="Headphone"
          className="h-42 w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <p className="text-sm text-gray-500">Electronics</p>

        <h2 className="line-clamp-2 text-xl font-semibold leading-tight text-white">
          {data.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="ml-2 text-sm text-gray-400">({data.rating.count})</span>
        </div>

        <hr className="border-white/10" />

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[var(--primary)]">${data.price}</h3>

          <button
            className="
            flex items-center gap-2
            rounded-full
            bg-[var(--primary)]
            px-3
            py-2
            font-semibold
            text-black
            transition
            hover:bg-[var(--primary-light)]
            hover:scale-105
            active:scale-95
          "
          >
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
