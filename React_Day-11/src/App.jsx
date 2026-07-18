import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import AddToCart from "./components/AddToCart";
import { MyStore } from "./components/context/MyContext";

const App = () => {
  const { toggle , productData } = useContext(MyStore);

  return (
    <div>
      <Navbar />
      {toggle ? (
        <div className="flex flex-wrap gap-5 overflow-auto p-5">
          {productData.map((pro) => (
            <Products key={pro.id} data={pro} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <AddToCart />
        </div>
      )}
    </div>
  );
};

export default App;
