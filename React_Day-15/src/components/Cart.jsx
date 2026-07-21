import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Cart = () => {
  const [singleProduct, setSingleProduct] = useState([]);

  console.log(singleProduct);

  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );
      setSingleProduct([...singleProduct, data]);
    } catch (error) {
      console.log("error is -> ", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      {singleProduct.map((product) => {
        return (
          <div key={product.id} className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {/* Cart Card */}
                <div className="flex items-center gap-6 rounded-2xl bg-white p-5 shadow">
                  <div className="h-32 w-32 rounded-xl bg-gray-100 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt=""
                      className="h-24 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <span className="rounded bg-indigo-100 px-2 py-1 text-xs text-indigo-600">
                      {product.category}
                    </span>

                    <h2 className="mt-2 text-lg font-semibold">
                     {product.title}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                      {product.description}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold text-indigo-600">
                      $ {product.price}
                    </h3>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center rounded-lg border">
                      <button className="px-4 py-2 text-lg">-</button>
                      <span className="px-4">1</span>
                      <button className="px-4 py-2 text-lg">+</button>
                    </div>

                    <button className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="h-fit rounded-2xl bg-white p-6 shadow">
                <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$109.95</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$5.00</span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>$124.95</span>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-700">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
