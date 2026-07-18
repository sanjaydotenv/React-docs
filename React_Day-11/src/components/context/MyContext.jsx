import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [productData, setProductData] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      image: "https://picsum.photos/300?random=1",
      price: 4999,
      rating: 4.8,
      description: "Comfortable running shoes with premium cushioning.",
    },
    {
      id: 2,
      name: "Adidas Hoodie",
      image: "https://picsum.photos/300?random=2",
      price: 2499,
      rating: 4.5,
      description: "Soft cotton hoodie for everyday wear.",
    },
    {
      id: 3,
      name: "Apple Watch",
      image: "https://picsum.photos/300?random=3",
      price: 29999,
      rating: 4.9,
      description: "Smartwatch with fitness and health tracking.",
    },
    {
      id: 4,
      name: "Sony Headphones",
      image: "https://picsum.photos/300?random=4",
      price: 7999,
      rating: 4.7,
      description: "Wireless headphones with noise cancellation.",
    },
    {
      id: 5,
      name: "Puma Sneakers",
      image: "https://picsum.photos/300?random=5",
      price: 3999,
      rating: 4.4,
      description: "Stylish sneakers for casual and sports wear.",
    },
    {
      id: 6,
      name: "Gaming Mouse",
      image: "https://picsum.photos/300?random=6",
      price: 1599,
      rating: 4.6,
      description: "RGB gaming mouse with adjustable DPI.",
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      image: "https://picsum.photos/300?random=7",
      price: 3499,
      rating: 4.8,
      description: "Mechanical keyboard with RGB backlighting.",
    },
    {
      id: 8,
      name: "Canon Camera",
      image: "https://picsum.photos/300?random=8",
      price: 45999,
      rating: 4.9,
      description: "Professional DSLR camera with 24MP sensor.",
    },
    {
      id: 9,
      name: "Leather Wallet",
      image: "https://picsum.photos/300?random=9",
      price: 999,
      rating: 4.3,
      description: "Premium leather wallet with multiple slots.",
    },
    {
      id: 10,
      name: "Backpack",
      image: "https://picsum.photos/300?random=10",
      price: 1899,
      rating: 4.5,
      description: "Durable backpack for travel and college.",
    },
    {
      id: 11,
      name: "Bluetooth Speaker",
      image: "https://picsum.photos/300?random=11",
      price: 2799,
      rating: 4.7,
      description: "Portable speaker with deep bass.",
    },
    {
      id: 12,
      name: "Samsung Monitor",
      image: "https://picsum.photos/300?random=12",
      price: 12999,
      rating: 4.6,
      description: "24-inch Full HD IPS monitor.",
    },
    {
      id: 13,
      name: "iPhone 16",
      image: "https://picsum.photos/300?random=13",
      price: 79999,
      rating: 4.9,
      description: "Latest iPhone with advanced camera system.",
    },
    {
      id: 14,
      name: "Laptop Stand",
      image: "https://picsum.photos/300?random=14",
      price: 1499,
      rating: 4.4,
      description: "Adjustable aluminum laptop stand.",
    },
    {
      id: 15,
      name: "Office Chair",
      image: "https://picsum.photos/300?random=15",
      price: 6999,
      rating: 4.6,
      description: "Ergonomic office chair with lumbar support.",
    },
    {
      id: 16,
      name: "Water Bottle",
      image: "https://picsum.photos/300?random=16",
      price: 599,
      rating: 4.2,
      description: "Stainless steel insulated bottle.",
    },
    {
      id: 17,
      name: "Fitness Band",
      image: "https://picsum.photos/300?random=17",
      price: 2499,
      rating: 4.5,
      description: "Track your steps, heart rate and sleep.",
    },
    {
      id: 18,
      name: "Sunglasses",
      image: "https://picsum.photos/300?random=18",
      price: 1199,
      rating: 4.3,
      description: "UV protected stylish sunglasses.",
    },
    {
      id: 19,
      name: "Coffee Mug",
      image: "https://picsum.photos/300?random=19",
      price: 399,
      rating: 4.4,
      description: "Ceramic mug perfect for coffee lovers.",
    },
    {
      id: 20,
      name: "Smart TV",
      image: "https://picsum.photos/300?random=20",
      price: 35999,
      rating: 4.8,
      description: "43-inch 4K Ultra HD Smart LED TV.",
    },
  ]);
  const [addToCart, setAddToCart] = useState([]);

  return (
    <MyStore.Provider
      value={{ toggle, productData, addToCart, setToggle, setAddToCart }}
    >
      {children}
    </MyStore.Provider>
  );
};
