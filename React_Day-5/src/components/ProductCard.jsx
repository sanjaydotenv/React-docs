import React from "react";

const ProductCard = ({ product , del}) => {


  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={product.image}
        alt="Product"
        className="h-52 w-full object-cover"
      />

      <div className="space-y-4 p-5">
        <p className="text-xs font-medium tracking-wide text-gray-500">
          ID: <span className="font-semibold text-gray-700">{product.id}</span>
        </p>

        <h2 className="line-clamp-2 text-xl font-bold text-gray-800">
          {product.title}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ₹ {product.price}
          </span>

          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
            ⭐ {product.rating}
          </span>
        </div>

        <button onClick={() => {
            del(product.id)
        }} className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
