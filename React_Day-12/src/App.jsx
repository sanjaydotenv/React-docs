import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { MyContext } from "./components/context/MyContext";
import axios from "axios";

const App = () => {
  console.log("App Rendering...");

  const { count, setCount, setToggle, toggle } = useContext(MyContext);
  const [dataStorage, setDataStorage] = useState(null);

  console.log(dataStorage);

  let getData = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setDataStorage(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white p-5">
      <Home />
      {toggle ? <About /> : <Contact />}

      <button
        className="px-10 py-3 bg-blue-700 rounded-xl "
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count is {count}
      </button>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="px-10 py-3 bg-red-700 rounded-xl ml-5"
      >
        Toggle Page
      </button>
    </div>
  );
};

export default App;
