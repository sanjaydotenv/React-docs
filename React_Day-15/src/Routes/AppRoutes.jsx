import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Products from "../components/Products";
import Service from "../components/Service";
import About from "../components/About";
import Cart from "../components/Cart";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
