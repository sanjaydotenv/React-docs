import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductHook = () => {

  const {overView} = useContext(ProductContext);


  return { overView };
};
