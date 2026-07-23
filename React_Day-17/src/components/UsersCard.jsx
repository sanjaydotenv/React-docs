import React from "react";
import { FiMail, FiPhone, FiMapPin, FiUser } from "react-icons/fi";

const UserCard = ({users}) => {

  
  return (
    <div className="w-92 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-indigo-600">
          
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            {users.name.lastname}
            {" "}
            {users.name.lastname}
          </h2>
          <p className="text-indigo-100">@{users.username}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">

        <div className="flex items-center gap-3">
          <FiMail className="text-indigo-600 text-lg" />
          <span className="text-gray-700">{users.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <FiPhone className="text-indigo-600 text-lg" />
          <span className="text-gray-700">{users.phone}</span>
        </div>

        <div className="flex items-center gap-3">
          <FiUser className="text-indigo-600 text-lg" />
          <span className="text-gray-700">ID : {users.id}</span>
        </div>

        <div className="flex items-center gap-3">
          <FiMapPin className="text-indigo-600 text-lg" />
          <span className="text-gray-700">{users.address.city}</span>
        </div>

        <div className="flex justify-between pt-3 border-t">
          <div>
            <p className="text-xs text-gray-500">Street</p>
            <p className="font-semibold">{users.address.street}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Zip Code</p>
            <p className="font-semibold">{users.address.zipcode}</p>
          </div>
        </div>

        <button className="w-full mt-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition">
          View Profile
        </button>

      </div>
    </div>
  );
};

export default UserCard;