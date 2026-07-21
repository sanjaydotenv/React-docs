import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  const navigate = useNavigate()

  const getProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProductsData(data);
    } catch (error) {
      console.log("error is -> ", error);
    }
  };

  useEffect(() => {
    console.log(productsData);
    getProducts();
  }, []);

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {productsData.map((product) => {
    return (
      <div
        key={product.id}
        className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex h-60 items-center justify-center overflow-hidden rounded-xl bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-52 object-contain transition duration-300 hover:scale-110"
          />
        </div>

        <span className="mt-5 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          {product.category}
        </span>

        <h2 className="mt-3 line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">
              ({product.rating.count})
            </span>
          </div>

          <span className="rounded bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
            {product.rating.rate}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </h3>

          <button
            onClick={() => navigate(`/cart/${product.id}`)}
            className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  })}
</div>
  );
};

export default Products;
