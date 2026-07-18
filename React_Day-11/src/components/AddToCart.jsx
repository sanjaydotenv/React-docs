import React, { useContext, useState } from "react";
import { MyStore } from "./context/MyContext";

const AddToCart = () => {

  const { addToCart } = useContext(MyStore);

  let total = addToCart.reduce((acc, val) => {
    return acc + val.price;
  }, 0);

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-5 items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-5">🛒 Shopping Cart</h2>

      {addToCart.map((data, idx) => {
        return (
          <div
            key={idx}
            className="flex items-center gap-4 border-b pb-4 mb-4 "
          >
            <img
              src={data.image}
              alt="Product"
              className="w-20 h-20 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{data.name}</h3>
              <p className="text-gray-500 text-sm">₹{data.price}</p>
            </div>

            <button className="text-red-500 text-xl">🗑️</button>
          </div>
        );
      })}

      <div className="flex justify-between text-lg font-bold mt-6">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Checkout
      </button>
    </div>
  );
};

export default AddToCart;
