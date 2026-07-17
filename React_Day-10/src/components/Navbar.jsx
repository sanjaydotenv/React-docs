import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="User"
          />
        </div>

        <div className="flex gap-6 md:gap-10 font-semibold text-gray-700">
          <h4 className="cursor-pointer hover:text-blue-600">Home</h4>
          <h4 className="cursor-pointer hover:text-blue-600">Contact</h4>
          <h4 className="cursor-pointer hover:text-blue-600">About</h4>
        </div>

        <button
          onClick={() => setToggle((prev) => !prev)}
          className="w-full md:w-auto px-5 py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
        >
          Create User
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
