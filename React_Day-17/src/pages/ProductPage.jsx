import React, { useEffect } from "react";
import { axiosInstance } from "../config/ApiCalls";
import { useAuthHook } from "../hooks/useAuthHook";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { productsData, setProductsData } = useAuthHook();

  const getProductsData = async () => {
    const { data } = await axiosInstance.get("/products");
    setProductsData(data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 ">
      {productsData.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default ProductPage;
