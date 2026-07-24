import { createContext, useState } from "react";
import { ChartLine , PackageSearch , Star , Tag  } from 'lucide-react';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [overView, setOverView] = useState([
    {
      count: 0,
      category: "Cart Items",
      title: "in your bag",
      icon: <PackageSearch />
    },
    {
      count: 0.0,
      category: "Cart Value",
      title: "Ready to Checkout",
      icon: <ChartLine />
    },
    {
      count: 5,
      category: "Top Products",
      title: "Highly rated",
      icon: <Star /> 
    },
    {
      count: 6,
      category: "Categories",
      title: "To explore",
      icon: <Tag />
    },
  ]);


  return (
    <ProductContext.Provider value={{ overView }}>
      {children}
    </ProductContext.Provider>
  );
};
