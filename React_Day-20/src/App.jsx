import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [productData, setproductData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [scrollY, seScrollY] = useState(null);

  const getData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setproductData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = () => {
    console.log("Search Rendering...");
    const data = productData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setproductData(data);
  };

  useEffect(() => {
    if (!searchData) return;

    let timeout = setTimeout(() => {
      filterData();
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchData]);



  let throttle = false;

  useEffect(() => {
    let handleScroll = () => {
      if (throttle) return;

      throttle = true;
      console.log("Scroll Triggered...");
      seScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <input
        onInput={(e) => setSearchData(e.target.value)}
        style={{ padding: "5px 20px" }}
        type="text"
        placeholder="Search Products"
      />
      {productData.map((data) => {
        return <h1 key={data.id}>{data.title}</h1>;
      })}
    </div>
  );
};

export default App;
