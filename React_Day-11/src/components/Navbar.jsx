import React, { useContext } from "react";
import { MyStore } from "./context/MyContext";

const Navbar = () => {
  const { setToggle } = useContext(MyStore);

  return (
    <div className="flex justify-between p-5 bg-gray-800 text-white font-semibold text-xl cursor-pointer">
      <h1>Logo</h1>
      <div className="flex gap-15">
        <h2
          onClick={() => {
            setToggle(true);
          }}
        >
          Home
        </h2>
        <h2
          onClick={() => {
            setToggle(false);
          }}
        >
          Cart
        </h2>
      </div>
      <h1>Login</h1>
    </div>
  );
};

export default Navbar;
