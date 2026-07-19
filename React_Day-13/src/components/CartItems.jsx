import React, { useContext } from "react";
import { MyContext } from "./context/MyContext";

const CartItems = () => {
  const { cartItems, setCartItems } = useContext(MyContext);

  const increaseQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((cart) => {
        return cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart;
      });
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((cart) => {
        if (cart.id === id) {
          if (cart.quantity > 1) {
            return { ...cart, quantity: cart.quantity - 1 };
          }
        }
        return cart;
      });
    });
  };

  const removeCart = (id) => {
    const updatedData = cartItems.filter((carts) => id !== carts.id);
    setCartItems(updatedData)
  };

  console.log(cartItems);

  return (
    <div>
      {cartItems.map((cart) => {
        return (
          <div key={cart.id} className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

            <div className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row items-center gap-6">
              {/* Product Image */}
              <div className="w-36 h-36 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src={cart.image}
                  alt="Product"
                  className="h-28 object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{cart.title}</h2>

                <p className="text-gray-500 text-sm mt-2">{cart.category}</p>

                <p className="text-2xl font-bold text-green-600 mt-3">
                  ${cart.price}
                </p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    decreaseQuantity(cart.id);
                  }}
                  className="w-10 h-10 rounded-lg bg-gray-200 text-xl"
                >
                  -
                </button>

                <span className="text-lg font-semibold">{cart.quantity}</span>

                <button
                  onClick={() => {
                    increaseQuantity(cart.id);
                  }}
                  className="w-10 h-10 rounded-lg bg-gray-200 text-xl"
                >
                  +
                </button>
              </div>

              {/* Total */}
              <div className="text-center">
                <p className="text-gray-500">Total</p>
                <h3 className="text-2xl font-bold">${cart.price}</h3>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeCart(cart.id)}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>

            {/* Cart Summary */}
            <div className="mt-8 bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between text-lg mb-3">
                <span>Subtotal</span>
                <span>${cart.price}</span>
              </div>

              <div className="flex justify-between text-lg mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>${cart.price * cart.quantity}</span>
              </div>

              <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
