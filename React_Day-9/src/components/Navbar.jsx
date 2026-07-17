import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="flex justify-between items-center p-2 bg-white">
      <div className="h-10 w-10 rounded-full">
        <img
          className="rounded-full"
          src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex gap-10 font-semibold">
        <h4>Home</h4>
        <h4>Contact</h4>
        <h4>About</h4>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="px-5 py-2 border-none rounded-sm bg-blue-700 text-white font-semibold hover:bg-blue-800"
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;
