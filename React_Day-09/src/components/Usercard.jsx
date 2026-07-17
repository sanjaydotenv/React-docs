import React from "react";

const Usercard = ({ user , setToggle }) => {
  return (
    <div className="p-10">
      <div className="w-80 bg-white rounded-xl shadow-lg p-5 ">
        <img
          src={user.image}
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 object-cover"
        />

        <div className="mt-4 space-y-2">
          <h2 className="text-xl font-bold text-center"></h2>

          <p>
            <span className="font-semibold">Name: {user.name}</span>
          </p>

          <p>
            <span className="font-semibold">Email: {user.email}</span>
          </p>
        </div>

        <div className="flex justify-between mt-5">
          <button onClick={() => {
            setToggle((prev) => !prev)
          }} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg">
            Update
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
