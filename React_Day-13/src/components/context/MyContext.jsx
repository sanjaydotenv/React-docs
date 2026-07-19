import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  console.log(productsData);

  const apiData = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    const updatedData = data.map((product) => {
    return {...product , quantity: 1}
    })

    setProductsData(updatedData)
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <MyContext.Provider
      value={{ toggle, setToggle, productsData, setCartItems, cartItems }}
    >
      {children}
    </MyContext.Provider>
  );
};
