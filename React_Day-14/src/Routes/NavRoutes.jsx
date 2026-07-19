import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Service from "../components/Service";
import More from "../components/More";
import Nested from "../components/Nested";

const NavRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/more" element={<More />} >
        <Route path="nested" element={<Nested />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default NavRoutes;
