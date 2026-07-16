import React, { useState } from "react";
import UserCard from "./UserCard";

const Register = ({ setToggle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const [users, setUsers] = useState([]);
  console.log(users);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      password: "",
      image: "",
    });
    setUsers([...users, formData]);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 gap-20">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              value={formData.name}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              value={formData.email}
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              value={formData.password}
              name="password"
              onChange={handleChange}
              type="text"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Profile Image</label>
            <input
              value={formData.image}
              name="image"
              onChange={handleChange}
              type="text"
              className="w-full border rounded-lg px-4 py-3 cursor-pointer"
              placeholder="Profile Picture"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-5">
          Already have an account?
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 cursor-pointer ml-1"
          >
            Login
          </span>
        </p>
      </div>

      <div className="flex gap-5 flex-wrap">
        {users.map((user) => {
        return <UserCard data={user} />;
      })}
      </div>
    </div>
  );
};

export default Register;
