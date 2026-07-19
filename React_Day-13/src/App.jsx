import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { MyContext } from "./components/context/MyContext";
import Products from "./components/Products";
import CartItems from "./components/CartItems";

const App = () => {
  const { toggle } = useContext(MyContext);

  return (
    <div>
      <Navbar />

      {toggle ? (
        <div>
          <Products />
        </div>
      ) : (
        <CartItems />
      )}
    </div>
  );
};

export default App;
