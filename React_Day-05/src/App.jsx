import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  
  const [productsData, setProductsData] = useState([
    {
      id: "PRD-1001",
      title: "Nike Air Max Shoes",
      price: 4999,
      rating: 4.8,
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      id: "PRD-1002",
      title: "Adidas Running Shoes",
      price: 4299,
      rating: 4.6,
      image: "https://picsum.photos/400/300?random=2",
    },
    {
      id: "PRD-1003",
      title: "Puma Sports Shoes",
      price: 3899,
      rating: 4.5,
      image: "https://picsum.photos/400/300?random=3",
    },
    {
      id: "PRD-1004",
      title: "Apple AirPods Pro",
      price: 21999,
      rating: 4.9,
      image: "https://picsum.photos/400/300?random=4",
    },
    {
      id: "PRD-1005",
      title: "Samsung Galaxy Watch",
      price: 15999,
      rating: 4.7,
      image: "https://picsum.photos/400/300?random=5",
    },
    {
      id: "PRD-1006",
      title: "Sony Wireless Headphones",
      price: 8999,
      rating: 4.8,
      image: "https://picsum.photos/400/300?random=6",
    },
    {
      id: "PRD-1007",
      title: "Canon DSLR Camera",
      price: 52999,
      rating: 4.9,
      image: "https://picsum.photos/400/300?random=7",
    },
    {
      id: "PRD-1008",
      title: "HP Gaming Laptop",
      price: 74999,
      rating: 4.6,
      image: "https://picsum.photos/400/300?random=8",
    },
    {
      id: "PRD-1009",
      title: "Dell Inspiron Laptop",
      price: 61999,
      rating: 4.5,
      image: "https://picsum.photos/400/300?random=9",
    },
    {
      id: "PRD-1010",
      title: "Logitech Mechanical Keyboard",
      price: 5499,
      rating: 4.7,
      image: "https://picsum.photos/400/300?random=10",
    },
    {
      id: "PRD-1011",
      title: "Boat Rockerz Headphones",
      price: 2499,
      rating: 4.4,
      image: "https://picsum.photos/400/300?random=11",
    },
    {
      id: "PRD-1012",
      title: "Apple iPhone 16",
      price: 79999,
      rating: 4.9,
      image: "https://picsum.photos/400/300?random=12",
    },
    {
      id: "PRD-1013",
      title: "Samsung Galaxy S25",
      price: 74999,
      rating: 4.8,
      image: "https://picsum.photos/400/300?random=13",
    },
    {
      id: "PRD-1014",
      title: "Realme Buds Air",
      price: 3499,
      rating: 4.3,
      image: "https://picsum.photos/400/300?random=14",
    },
    {
      id: "PRD-1015",
      title: "Mi Smart Band 9",
      price: 2999,
      rating: 4.4,
      image: "https://picsum.photos/400/300?random=15",
    },
    {
      id: "PRD-1016",
      title: "Lenovo ThinkPad",
      price: 68999,
      rating: 4.8,
      image: "https://picsum.photos/400/300?random=16",
    },
    {
      id: "PRD-1017",
      title: "Asus Gaming Monitor",
      price: 18999,
      rating: 4.7,
      image: "https://picsum.photos/400/300?random=17",
    },
    {
      id: "PRD-1018",
      title: "JBL Bluetooth Speaker",
      price: 4999,
      rating: 4.6,
      image: "https://picsum.photos/400/300?random=18",
    },
    {
      id: "PRD-1019",
      title: "Noise Smart Watch",
      price: 3999,
      rating: 4.4,
      image: "https://picsum.photos/400/300?random=19",
    },
    {
      id: "PRD-1020",
      title: "OnePlus Nord Buds",
      price: 2799,
      rating: 4.5,
      image: "https://picsum.photos/400/300?random=20",
    },
  ]);

  const handleDelete = (id) => {
    let filterData = productsData.filter((pro) => pro.id !== id)
    setProductsData(filterData)
  }

  return (
    <div className="bg-black h-full text-white p-5 flex flex-wrap gap-10">
      {productsData.map((product) => {
        return <ProductCard product={product} del={handleDelete} />
      })}
    </div>
  );
};

export default App;
