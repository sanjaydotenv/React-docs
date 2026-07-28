import { createContext, useEffect, useMemo, useState } from "react";
import {
  ChartLine,
  PackageSearch,
  Star,
  Tag,
  Laptop,
  Shirt,
  Sofa,
  Dumbbell,
  Watch,
} from "lucide-react";

export const ProductContext = createContext();

const electronics = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    rating: { rate: 4.9, count: 1245 },
    description:
      "Premium wireless noise cancelling headphones with 30-hour battery life.",
  },
  {
    id: 2,
    title: "Apple AirPods Pro (2nd Gen)",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
    category: "Electronics",
    rating: { rate: 4.8, count: 980 },
    description:
      "Wireless earbuds with Active Noise Cancellation and Transparency Mode.",
  },
  {
    id: 3,
    title: "Samsung 32-inch 4K Smart Monitor",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    category: "Electronics",
    rating: { rate: 4.7, count: 542 },
    description: "Ultra HD smart monitor with HDR10 support.",
  },
  {
    id: 4,
    title: "Logitech MX Master 3S Mouse",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    category: "Electronics",
    rating: { rate: 4.8, count: 860 },
    description: "Advanced wireless productivity mouse with silent clicks.",
  },
  {
    id: 5,
    title: "Mechanical RGB Gaming Keyboard",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    category: "Electronics",
    rating: { rate: 4.6, count: 612 },
    description: "Mechanical keyboard with RGB lighting and blue switches.",
  },
  {
    id: 6,
    title: "JBL Flip 6 Bluetooth Speaker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    category: "Electronics",
    rating: { rate: 4.7, count: 437 },
    description: "Portable waterproof Bluetooth speaker with deep bass.",
  },
  {
    id: 7,
    title: "Canon EOS M50 Mirrorless Camera",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    category: "Electronics",
    rating: { rate: 4.9, count: 325 },
    description: "24.1MP mirrorless camera with 4K video recording.",
  },
  {
    id: 8,
    title: "Dell 27-inch IPS Monitor",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
    category: "Electronics",
    rating: { rate: 4.5, count: 498 },
    description: "Full HD IPS monitor with ultra-thin bezels.",
  },
  {
    id: 9,
    title: "SanDisk Extreme 1TB SSD",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
    category: "Electronics",
    rating: { rate: 4.8, count: 1102 },
    description: "Portable high-speed SSD with USB-C connectivity.",
  },
  {
    id: 10,
    title: "GoPro HERO12 Action Camera",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500",
    category: "Electronics",
    rating: { rate: 4.9, count: 710 },
    description: "Waterproof 5.3K action camera with image stabilization.",
  },
  {
    id: 11,
    title: "ASUS WiFi 6 Dual Band Router",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500",
    category: "Electronics",
    rating: { rate: 4.6, count: 390 },
    description: "High-speed WiFi 6 router for gaming and streaming.",
  },
  {
    id: 12,
    title: "Amazon Echo Dot (5th Gen)",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500",
    category: "Electronics",
    rating: { rate: 4.7, count: 1845 },
    description: "Smart speaker with Alexa voice assistant.",
  },
];

const clothing = [
  {
    id: 101,
    title: "Men's Oversized Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "Fashion",
    rating: { rate: 4.8, count: 420 },
    description: "Premium oversized cotton t-shirt for everyday comfort.",
  },
  {
    id: 102,
    title: "Slim Fit Denim Jeans",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    category: "Fashion",
    rating: { rate: 4.7, count: 318 },
    description: "Classic slim fit blue denim jeans.",
  },
  {
    id: 103,
    title: "Men's Casual Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    category: "Fashion",
    rating: { rate: 4.9, count: 561 },
    description: "Warm fleece hoodie with adjustable hood.",
  },
  {
    id: 104,
    title: "Women's Floral Summer Dress",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
    category: "Fashion",
    rating: { rate: 4.8, count: 273 },
    description: "Lightweight floral dress perfect for summer.",
  },
  {
    id: 105,
    title: "Men's Formal White Shirt",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
    category: "Fashion",
    rating: { rate: 4.6, count: 410 },
    description: "Premium formal shirt made with wrinkle-free fabric.",
  },
  {
    id: 106,
    title: "Women's Skinny Fit Jeans",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    category: "Fashion",
    rating: { rate: 4.7, count: 298 },
    description: "Stretchable skinny fit jeans for women.",
  },
  {
    id: 107,
    title: "Leather Biker Jacket",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=500",
    category: "Fashion",
    rating: { rate: 4.9, count: 188 },
    description: "Stylish genuine leather biker jacket.",
  },
  {
    id: 108,
    title: "Men's Sports Track Pants",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    category: "Fashion",
    rating: { rate: 4.5, count: 357 },
    description: "Comfortable track pants for gym and running.",
  },
  {
    id: 109,
    title: "Women's Wool Sweater",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
    category: "Fashion",
    rating: { rate: 4.8, count: 240 },
    description: "Soft knitted wool sweater for winter.",
  },
  {
    id: 110,
    title: "Men's Polo T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500",
    category: "Fashion",
    rating: { rate: 4.7, count: 332 },
    description: "Classic polo t-shirt with premium cotton fabric.",
  },
  {
    id: 111,
    title: "Women's Blazer",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
    category: "Fashion",
    rating: { rate: 4.8, count: 196 },
    description: "Elegant blazer suitable for office and formal wear.",
  },
  {
    id: 112,
    title: "Men's Winter Puffer Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=500",
    category: "Fashion",
    rating: { rate: 4.9, count: 275 },
    description: "Water-resistant puffer jacket with excellent insulation.",
  },
];

const home = [
  {
    id: 201,
    title: "Modern Fabric Sofa",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    category: "Home",
    rating: { rate: 4.8, count: 412 },
    description: "Comfortable 3-seater fabric sofa with wooden legs.",
  },
  {
    id: 202,
    title: "Wooden Coffee Table",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500",
    category: "Home",
    rating: { rate: 4.7, count: 285 },
    description: "Minimal wooden coffee table with storage shelf.",
  },
  {
    id: 203,
    title: "Luxury King Size Bed",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    category: "Home",
    rating: { rate: 4.9, count: 198 },
    description: "Premium king-size bed with upholstered headboard.",
  },
  {
    id: 204,
    title: "Dining Table Set",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=500",
    category: "Home",
    rating: { rate: 4.8, count: 310 },
    description: "6-seater wooden dining table with comfortable chairs.",
  },
  {
    id: 205,
    title: "Ergonomic Office Chair",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=500",
    category: "Home",
    rating: { rate: 4.7, count: 540 },
    description: "Adjustable office chair with lumbar support.",
  },
  {
    id: 206,
    title: "Wooden Bookshelf",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    category: "Home",
    rating: { rate: 4.6, count: 263 },
    description: "Modern bookshelf with five spacious shelves.",
  },
  {
    id: 207,
    title: "Floor Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500",
    category: "Home",
    rating: { rate: 4.5, count: 189 },
    description: "Minimal floor lamp with warm LED lighting.",
  },
  {
    id: 208,
    title: "Wall Mirror",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500",
    category: "Home",
    rating: { rate: 4.8, count: 154 },
    description: "Decorative round wall mirror with wooden frame.",
  },
  {
    id: 209,
    title: "TV Cabinet",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500",
    category: "Home",
    rating: { rate: 4.6, count: 227 },
    description: "Modern TV stand with storage drawers.",
  },
  {
    id: 210,
    title: "Queen Size Mattress",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    category: "Home",
    rating: { rate: 4.9, count: 376 },
    description: "Memory foam mattress for superior comfort.",
  },
  {
    id: 211,
    title: "Decorative Wall Clock",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500",
    category: "Home",
    rating: { rate: 4.4, count: 192 },
    description: "Elegant silent wall clock for living room.",
  },
  {
    id: 212,
    title: "Indoor Plant Stand",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500",
    category: "Home",
    rating: { rate: 4.7, count: 245 },
    description: "Metal plant stand perfect for indoor decoration.",
  },
];

const sports = [
  {
    id: 301,
    title: "Adidas Football",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500",
    category: "Sports",
    rating: { rate: 4.8, count: 482 },
    description: "Official size football with durable TPU construction.",
  },
  {
    id: 302,
    title: "Cricket Bat (English Willow)",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500",
    category: "Sports",
    rating: { rate: 4.9, count: 241 },
    description: "Premium English willow cricket bat for professional players.",
  },
  {
    id: 303,
    title: "Badminton Racket",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500",
    category: "Sports",
    rating: { rate: 4.7, count: 190 },
    description: "Lightweight carbon fiber badminton racket.",
  },
  {
    id: 304,
    title: "Basketball",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500",
    category: "Sports",
    rating: { rate: 4.8, count: 326 },
    description: "Indoor and outdoor basketball with excellent grip.",
  },
  {
    id: 305,
    title: "Tennis Racket",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500",
    category: "Sports",
    rating: { rate: 4.6, count: 154 },
    description: "Professional tennis racket with lightweight frame.",
  },
  {
    id: 306,
    title: "Yoga Mat",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500",
    category: "Sports",
    rating: { rate: 4.9, count: 610 },
    description: "Non-slip yoga mat with extra cushioning.",
  },
  {
    id: 307,
    title: "Dumbbell Set (20kg)",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    category: "Sports",
    rating: { rate: 4.8, count: 435 },
    description: "Adjustable dumbbell set for home workouts.",
  },
  {
    id: 308,
    title: "Skipping Rope",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500",
    category: "Sports",
    rating: { rate: 4.5, count: 212 },
    description: "High-speed skipping rope with adjustable length.",
  },
  {
    id: 309,
    title: "Cycling Helmet",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
    category: "Sports",
    rating: { rate: 4.7, count: 176 },
    description: "Lightweight cycling helmet with adjustable fit.",
  },
  {
    id: 310,
    title: "Sports Water Bottle",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    category: "Sports",
    rating: { rate: 4.6, count: 503 },
    description: "Leak-proof BPA-free water bottle.",
  },
  {
    id: 311,
    title: "Boxing Gloves",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1517438984742-1262db08379e?w=500",
    category: "Sports",
    rating: { rate: 4.8, count: 289 },
    description: "Premium boxing gloves with shock absorption.",
  },
  {
    id: 312,
    title: "Fitness Resistance Bands",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1518611012118-fb2f15d3d5f2?w=500",
    category: "Sports",
    rating: { rate: 4.9, count: 724 },
    description: "5-level resistance bands for strength training.",
  },
];

const accessories = [
  {
    id: 401,
    title: "Wireless Bluetooth Earbuds",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
    category: "Accessories",
    rating: { rate: 4.6, count: 325 },
    description:
      "Premium wireless earbuds with clear sound quality and long battery backup.",
  },
  {
    id: 402,
    title: "Smart Watch",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Accessories",
    rating: { rate: 4.7, count: 542 },
    description:
      "Smartwatch with fitness tracking, heart rate monitor and notifications.",
  },
  {
    id: 403,
    title: "Leather Wallet",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    category: "Accessories",
    rating: { rate: 4.4, count: 218 },
    description:
      "Stylish leather wallet with multiple card and cash compartments.",
  },
  {
    id: 404,
    title: "Gaming Mouse",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    category: "Accessories",
    rating: { rate: 4.8, count: 671 },
    description:
      "High precision gaming mouse with ergonomic design and RGB lights.",
  },
  {
    id: 405,
    title: "Laptop Backpack",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Accessories",
    rating: { rate: 4.5, count: 389 },
    description:
      "Durable waterproof backpack with laptop protection compartment.",
  },
  {
    id: 406,
    title: "Phone Stand",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
    category: "Accessories",
    rating: { rate: 4.3, count: 156 },
    description: "Adjustable phone stand perfect for desk and office setup.",
  },
  {
    id: 407,
    title: "Fast Charging Cable",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
    category: "Accessories",
    rating: { rate: 4.6, count: 490 },
    description: "Strong braided USB Type-C cable with fast charging support.",
  },
  {
    id: 408,
    title: "Classic Sunglasses",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    category: "Accessories",
    rating: { rate: 4.5, count: 276 },
    description: "UV protected sunglasses with modern lightweight frame.",
  },
  {
    id: 409,
    title: "Wireless Keyboard",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    category: "Accessories",
    rating: { rate: 4.7, count: 412 },
    description: "Compact wireless keyboard with smooth typing experience.",
  },
  {
    id: 410,
    title: "Mobile Cover",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=500",
    category: "Accessories",
    rating: { rate: 4.2, count: 198 },
    description: "Shockproof mobile cover with premium finish and protection.",
  },
  {
    id: 411,
    title: "Fitness Band",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=500",
    category: "Accessories",
    rating: { rate: 4.5, count: 364 },
    description: "Fitness tracker with step counter and sleep monitoring.",
  },
  {
    id: 412,
    title: "Premium Watch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
    category: "Accessories",
    rating: { rate: 4.8, count: 723 },
    description: "Elegant wrist watch with premium metal design.",
  },
  {
    id: 413,
    title: "Laptop Cooling Pad",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
    category: "Accessories",
    rating: { rate: 4.4, count: 287 },
    description: "Cooling pad that improves laptop airflow during heavy usage.",
  },
  {
    id: 414,
    title: "Portable Power Bank",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609592424847-1e8b4c6f9b3a?w=500",
    category: "Accessories",
    rating: { rate: 4.6, count: 534 },
    description: "High capacity power bank with fast charging technology.",
  },
  {
    id: 415,
    title: "Gaming Headset",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
    category: "Accessories",
    rating: { rate: 4.9, count: 845 },
    description:
      "Gaming headset with immersive sound and comfortable ear cushions.",
  },
];

export const allProducts = [
  ...electronics,
  ...clothing,
  ...home,
  ...sports,
  ...accessories,
];

export const ProductContextProvider = ({ children }) => {
  const productIcon = useMemo(() => {
    const definitions = [
      { icon: <Shirt />, title: "Fashion" },
      { icon: <Laptop />, title: "Electronics" },
      { icon: <Sofa />, title: "Home" },
      { icon: <Dumbbell />, title: "Sports" },
      { icon: <Watch />, title: "Accessories" },
    ];

    return definitions.map((def) => ({
      ...def,
      item: `${allProducts.filter((p) => p.category === def.title).length} Items`,
    }));
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchProducts, setSearchProducts] = useState("");

  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredProducts = useMemo(() => {
    const query = searchProducts.trim().toLowerCase();

    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        query === "" || product.title.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchProducts]);

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const cartSubtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  const overView = useMemo(
    () => [
      {
        count: cartCount,
        category: "Cart Items",
        title: "in your bag",
        icon: <PackageSearch />,
      },
      {
        count: `$${cartSubtotal.toFixed(2)}`,
        category: "Cart Value",
        title: "Ready to Checkout",
        icon: <ChartLine />,
      },
      {
        count: allProducts.filter((p) => p.rating.rate >= 4.8).length,
        category: "Top Products",
        title: "Highly rated",
        icon: <Star />,
      },
      {
        count: productIcon.length,
        category: "Categories",
        title: "To explore",
        icon: <Tag />,
      },
    ],
    [cartCount, cartSubtotal, productIcon],
  );

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        overView,
        productIcon,
        filteredProducts,
        selectedCategory,
        setSelectedCategory,
        allProducts,
        searchProducts,
        setSearchProducts,
        cartItems,
        setCartItems,
        removeFromCart,
        cartCount,
        cartSubtotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
