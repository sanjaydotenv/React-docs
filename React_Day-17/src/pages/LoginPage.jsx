import React from "react";
import { useAuthHook } from "../hooks/useAuthHook";

const LoginPage = () => {
  
  const { navigate, register, handleSubmit, reset, errors , LoginFormSubmit } = useAuthHook();

  return (
    <div className="min-h-screen flex items-center justify-center  from-indigo-100 via-white to-purple-100 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">
            Login to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit(LoginFormSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            {errors.email && <p className="font-semibold text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            {errors.password && <p className="font-semibold text-red-500">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?
          <span
            onClick={() => navigate("/")}
            className="text-indigo-600 font-semibold cursor-pointer ml-1 hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
