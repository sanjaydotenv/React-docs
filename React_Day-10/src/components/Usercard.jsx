import React from "react";

const Usercard = ({ user, setToggle, setUpdatedData, deleteUser }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-5">
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 object-cover"
        />

        <div className="mt-4 space-y-2">
          <h2 className="text-xl font-bold text-center">{user.name}</h2>

          <p className="break-words">
            <span className="font-semibold">Name:</span> {user.name}
          </p>

          <p className="break-words">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <button
            onClick={() => {
              setToggle((prev) => !prev);
              setUpdatedData(user);
            }}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Update
          </button>

          <button
            onClick={() => deleteUser(user.id)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;