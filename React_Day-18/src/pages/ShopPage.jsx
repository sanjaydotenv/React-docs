import React from "react";
import SearchBar from "../components/SearchBar";
import ProductsCard from "../components/ProductsCard";
import { ProductHook } from "../hook/useProductHook";
import { allProducts } from "../context/ProductContext";

const ShopPage = () => {
  const { productData, selectedCategory } = ProductHook();

  console.log(selectedCategory);

  const filterProduct =
    selectedCategory === "all"
      ? productData
      : allProducts.filter((item) => {
          return item.category === selectedCategory;
        });

  return (
    <div className="px-30 py-10 flex flex-col gap-10">
      <SearchBar />
      <div className="grid grid-cols-4 gap-5">
        {filterProduct.map((product) => {
          return <ProductsCard key={product.id} data={product}/>
        })}
      </div>
    </div>
  );
};

export default ShopPage;
