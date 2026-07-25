import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [productData, setproductData] = useState([]);
  const [searchData, setSearchData] = useState(null);

  const getData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setproductData(data);
  };

  const filterData = () => {
    console.log("Rendering...");
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

  useEffect(() => {
    getData();
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
