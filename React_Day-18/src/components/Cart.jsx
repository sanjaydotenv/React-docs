import React from "react";
import { X, Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";
import { ProductHook } from "../hook/useProductHook";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, increaseQty, decreaseQty, removeFromCart, cartSubtotal } =
    ProductHook();

  const tax = cartSubtotal * 0.08;
  const total = cartSubtotal + tax;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const close = () => navigate(-1);

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end">
      <div className="w-full sm:w-[430px] h-screen bg-[#111117] border-l border-white/10 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <ShoppingBag size={24} />
              Shopping Cart
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              {itemCount} {itemCount === 1 ? "Item" : "Items"} Added
            </p>
          </div>

          <button
            onClick={close}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center"
          >
            <X className="text-white" />
          </button>
        </div>

        {/* Items */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-gray-400">
            <ShoppingBag size={48} className="opacity-30" />
            <p>Your cart is empty</p>
            <button
              onClick={() => navigate("/mainlayout/shop")}
              className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-[#191922] rounded-3xl p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded-2xl object-cover bg-white"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                        {item.category}
                      </span>

                      <button onClick={() => removeFromCart(item.id)}>
                        <Trash2
                          size={18}
                          className="text-red-400 hover:text-red-500"
                        />
                      </button>
                    </div>

                    <h3 className="text-white font-semibold mt-3 leading-6">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      ⭐ {item.rating.rate} ({item.rating.count})
                    </p>

                    <div className="flex justify-between items-center mt-5">
                      <div className="flex items-center bg-[#23232d] rounded-xl">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="p-3"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="px-4 text-white">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="p-3"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <span className="text-2xl font-bold text-purple-400">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-white/10 p-6">
            <div className="flex gap-3">
              <input
                placeholder="Coupon Code"
                className="flex-1 bg-[#191922] rounded-xl px-4 py-3 outline-none border border-white/10 text-white"
              />

              <button className="px-5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white">
                Apply
              </button>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between">
                <span className="text-xl text-white font-semibold">
                  Total
                </span>

                <span className="text-3xl font-bold text-purple-400">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:scale-[1.02] duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
