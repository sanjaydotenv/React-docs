import React, { useContext } from "react";
import { MyStore } from "./context/MyContext";

const Products = ({ data }) => {
  const { setAddToCart } = useContext(MyStore);

  return (
    <div className="p-5 flex">
      <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
        <img
          src={data.image}
          alt="Product"
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold">{data.name}</h2>

          <div className="flex items-center justify-between mt-2">
            <span className="text-yellow-500 font-semibold">
              ⭐ {data.rating}
            </span>
            <span className="text-green-600 font-bold">₹{data.price}</span>
          </div>

          <p className="text-gray-600 text-sm mt-3">{data.description}</p>

          <button
            onClick={() => {
              setAddToCart((prev) => [...prev, data]);
            }}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
