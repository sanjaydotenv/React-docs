import React from "react";
import { useAuthHook } from "../hooks/useAuthHook";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({product}) => {

  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
  {/* Image */}
  <div className="h-52 bg-gray-100 flex items-center justify-center p-6">
    <img
       src={product.image}
          alt={product.title}
      className="h-40 object-contain hover:scale-110 transition duration-300"
    />
  </div>

  {/* Content */}
  <div className="p-5">
    <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
      {product.category}
    </span>

    <h2 className="mt-3 text-lg font-bold text-gray-800 line-clamp-2">
      {product.title}
    </h2>

    <div className="flex items-center justify-between mt-4">
      <span className="text-2xl font-bold text-indigo-600">${product.price}</span>

      <div className="flex items-center gap-1 text-yellow-500">
        ⭐ <span className="text-gray-700 text-sm">{product.rating.rate}</span>
      </div>
    </div>

    <button className="w-full mt-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
      View Product
    </button>
  </div>
</div>
  );
};

export default ProductCard;
