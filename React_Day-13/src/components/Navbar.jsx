import React, { useContext } from "react";
import { MyContext } from "./context/MyContext";

const Navbar = () => {
  const { setToggle } = useContext(MyContext);

  return (
    <div className="flex justify-between p-5 bg-gray-700 text-white font-semibold text-xl cursor-pointer">
      <h1>logo</h1>
      <div className="flex gap-5">
        <h2 onClick={() => setToggle(true)}>Products</h2>
        <h2 onClick={() => setToggle(false)}>Cart</h2>
      </div>
      <h1>Login</h1>
    </div>
  );
};

export default Navbar;
