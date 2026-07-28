import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductHook = () => {
  const {
    overView,
    productIcon,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    allProducts,
    searchProducts,
    setSearchProducts,
    setCartItems,
    cartItems,
    removeFromCart,
    cartCount,
    cartSubtotal,
  } = useContext(ProductContext);

  const handleSearchProducts = (e) => {
    setSearchProducts(e.target.value);
  };

  const addToCart = (id) => {
    const product = allProducts.find((item) => item.id === id);

    if (!product) return;

    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === id);

      if (exist) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return {
    overView,
    productIcon,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    allProducts,
    searchProducts,
    setSearchProducts,
    handleSearchProducts,
    setCartItems,
    cartItems,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    cartCount,
    cartSubtotal,
  };
};
