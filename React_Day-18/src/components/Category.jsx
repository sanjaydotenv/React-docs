import React from "react";
import {} from "lucide-react";

const Category = ({ data }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-72 h-36 rounded-2xl bg-[#18181B] border border-zinc-800 p-6 flex flex-col justify-between hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 cursor-pointer">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-violet-500/15 text-violet-400 flex items-center justify-center text-3xl">
          {data.icon}
        </div>

        {/* Content */}
        <div>
          <h2 className="text-white text-xl font-semibold">{data.title}</h2>

          <p className="text-zinc-400 text-sm mt-1">{data.item}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
