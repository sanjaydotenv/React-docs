import React from "react";
import { ProductHook } from "../hook/useProductHook";

const SearchBar = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    handleSearchProducts,
    searchProducts,
    filteredProducts,
  } = ProductHook();

  return (
    <div>
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-[var(--text-primary)]">
          All Products
        </h1>

        <p className="mt-2 text-[var(--text-secondary)]">
          {filteredProducts.length} Products Found
        </p>
      </div>

      {/* Search Bar */}
      <div>
        <div
          className="
    flex flex-col gap-4
    rounded-3xl
    border border-white/10
    bg-white/5
    backdrop-blur-xl
    p-5
    shadow-[0_10px_40px_rgba(0,0,0,.35)]
  "
        >
          {/* Search */}
          <div className="flex w-full gap-5">
            <div className="relative flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.3-4.3M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>

              <input
                value={searchProducts}
                onChange={handleSearchProducts}
                type="text"
                placeholder="Search products..."
                className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-[#16161f]
        py-4
        pl-14
        pr-5
        text-white
        placeholder:text-gray-500
        outline-none
        focus:border-violet-500
        transition
      "
              />
            </div>

            {/* Category */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
              className="
      w-56
      rounded-2xl
      border
      border-white/10
      bg-[#16161f]
      px-5
      py-4
      text-white
      outline-none
    "
            >
              <option value={"all"}>All Categories</option>
              <option value={"Electronics"}>Electronics</option>
              <option value={"Fashion"}>Clothing</option>
              <option value={"Home"}>Home</option>
              <option value={"Sports"}>Sports</option>
              <option value={"Accessories"}>Accessories</option>
            </select>

            {/* Sort */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
