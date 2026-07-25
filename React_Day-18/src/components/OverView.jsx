import React from "react";


const OverView = ({ data }) => {
  return (
    <div className="w-[20vw] rounded-3xl border border-white/10 bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_0_30px_rgba(180,255,0,.08)]">
      <div className="flex items-center gap-5">
        {/* Icon */}

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-[var(--primary)]">
          {data.icon}
        </div>

        {/* Content */}

        <div>
          <h1 className="text-xl font-bold text-white">{data.count}</h1>

          <p className="mt-1 text-sm font-medium text-gray-200">
            {data.category}
          </p>

          <p className="text-xs text-gray-500">{data.title}</p>
        </div>
      </div>
    </div>
  );
};

export default OverView;
