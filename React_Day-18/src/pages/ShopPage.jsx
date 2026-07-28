import React from "react";
import SearchBar from "../components/SearchBar";
import ProductsCard from "../components/ProductsCard";
import { ProductHook } from "../hook/useProductHook";

const ShopPage = () => {
  const { filteredProducts, addToCart } = ProductHook();

  return (
    <div className="px-6 md:px-16 lg:px-30 py-10 flex flex-col gap-10">
      <SearchBar />

      {filteredProducts.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-3xl font-bold text-gray-500">
            Product Not Found 😔
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductsCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
