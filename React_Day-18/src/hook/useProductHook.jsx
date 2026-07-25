import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { axiosInstance } from "../config/ProductsData";

export const ProductHook = () => {
  const {
    overView,
    productIcon,
    footerIcon,
    productData,
    setProductData,
    selectedCategory,
    setSelectedCategory,
    allProducts
  } = useContext(ProductContext);

  const ProductCall = async () => {
    const { data } = await axiosInstance.get("/products");
    setProductData(data);
  };

  useEffect(() => {
    ProductCall();
  }, []);

  return {
    overView,
    productIcon,
    footerIcon,
    productData,
    selectedCategory,
    setSelectedCategory,
    allProducts,
  };
};
