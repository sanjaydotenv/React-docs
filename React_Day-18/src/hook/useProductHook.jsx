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
    allProducts,
    searchProducts,
    setSearchProducts,
  } = useContext(ProductContext);

  const ProductCall = async () => {
    const { data } = await axiosInstance.get("/products");
    const finalProducts = [...data, ...allProducts];
    setProductData(finalProducts);
  };

  useEffect(() => {
    ProductCall();
  }, []);

  const handleSearchProducts = (e) => {
    setSearchProducts(e.target.value);
  };

  useEffect(() => {
    let productTimeout = setTimeout(() => {
      const searchedData = allProducts.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(searchProducts.toLowerCase());
      });

      if (searchedData.length > 0) {

        setProductData(searchedData);
      }else {
        setProductData([])
      }

    }, 500);

    return () => clearTimeout(productTimeout);
  }, [searchProducts]);


  return {
    overView,
    productIcon,
    footerIcon,
    productData,
    selectedCategory,
    setSelectedCategory,
    allProducts,
    searchProducts,
    setSearchProducts,
    setProductData,
    handleSearchProducts,
  };
};
