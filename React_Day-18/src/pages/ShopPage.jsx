import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductsCard from "../components/ProductsCard";
import { ProductHook } from "../hook/useProductHook";
import { allProducts } from "../context/ProductContext";

const ShopPage = () => {
  const { productData, selectedCategory, setProductData } = ProductHook();

  const filterProduct =
    selectedCategory === "all"
      ? productData
      : allProducts.filter((item) => {
          return item.category === selectedCategory;
        });

  useEffect(() => {
    setProductData(filterProduct);
  }, [selectedCategory]);

  return (
    <div className="px-30 py-10 flex flex-col gap-10">
  <SearchBar />

  {productData.length === 0 ? (
    <div className="flex justify-center items-center h-96">
      <h1 className="text-3xl font-bold text-gray-500">
        Product Not Found 😔
      </h1>
    </div>
  ) : (
    <div className="grid grid-cols-4 gap-5">
      {productData.map((product) => (
        <ProductsCard key={product.title} data={product} />
      ))}
    </div>
  )}
</div>
  );
};

export default ShopPage;
