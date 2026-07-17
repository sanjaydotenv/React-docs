import React from "react";

const UserCard = ({ data }) => {
    console.log(data)
  return (
    <div className="flex">
      <div className="w-80 bg-white rounded-xl shadow-md border p-5 ">
        <div className="flex items-center gap-4 ">
          <img
            src={data.image}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border"
          />

          <div>
            <h2 className="text-lg font-semibold">{data.name}</h2>
            <p className="text-sm text-gray-500">{data.email}</p>
          </div>
        </div>

        <div className="mt-5 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Password</span>
            <span>********</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Status</span>
            <span className="text-green-600">Active</span>
          </div>
        </div>

        <button className="w-full mt-5 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 font-bold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
