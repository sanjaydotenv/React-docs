import React from "react";
import { ShoppingCart, Star } from "lucide-react";

const ProductsCard = ({ product, onAddToCart }) => {
  return (
    <div className="group w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#15151d] transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_20px_50px_rgba(124,77,255,.18)]">
      {/* Image Section */}
      <div className="relative bg-white p-4">
        <span className="absolute left-4 top-4 rounded-full bg-gray-600 px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-42 w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <p className="text-sm text-gray-500">{product.category}</p>

        <h2 className="line-clamp-2 text-xl font-semibold leading-tight text-white">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Math.round(product.rating.rate)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-700"
              }
            />
          ))}

          <span className="ml-2 text-sm text-gray-400">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        <hr className="border-white/10" />

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[var(--primary)]">
            ${product.price.toFixed(2)}
          </h3>

          <button
            onClick={() => onAddToCart(product.id)}
            className="
            flex items-center gap-2
            rounded-full
            bg-[var(--primary)]
            px-3
            py-2
            font-semibold
            text-black
            transition
            hover:bg-[var(--primary-light)]
            hover:scale-105
            active:scale-95
          "
          >
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
