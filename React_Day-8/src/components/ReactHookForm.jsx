import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  let {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <div className="w-102 bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>
        <p className="text-gray-500 text-center mt-2 mb-8">
          Fill in your details to continue
        </p>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-5"
        >
          <input
            {...register("name")}
            className="w-full border  rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="text"
            placeholder="Full Name"
          />

          <input
            {...register("email")}
            className="w-full border  rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="email"
            placeholder="Email Address"
          />

          <input
            {...register("password")}
            className="w-full border  rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="password"
            placeholder="Password"
          />

          <input
            {...register("image")}
            className="w-full border  rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="text"
            placeholder="Image URL"
          />

          <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReactHookForm;
