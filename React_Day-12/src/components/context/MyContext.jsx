import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  return (
    <MyContext.Provider value={{ count, setCount, toggle, setToggle }}>
      {children}
    </MyContext.Provider>
  );
};
