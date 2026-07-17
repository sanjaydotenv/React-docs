import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({
  setUserData,
  setToggle,
  userData,
  setUpdatedData,
  updatedData,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });

  const formSubmit = (data) => {
    if (updatedData) {
      
      const updatedUsers = userData.map((user) => {
        return user.id === updatedData.id
          ? { ...data, id: updatedData.id }
          : user;
      });

      setUserData(updatedUsers);
      localStorage.setItem("userData", JSON.stringify(updatedUsers));

      setToggle((prev) => !prev);
      reset();
      return;
    }
    let obj = [...userData, { ...data, id: nanoid() }];
    setUserData(obj);
    localStorage.setItem("userData", JSON.stringify(obj));
    setToggle((prev) => !prev);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-5 relative"
      >
        <p
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="text-4xl cursor-pointer absolute top-1 left-2 text-red-900"
        >
          x
        </p>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add User
        </h2>

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^\S.*$/,
                message: "Blank Spaces is not allowed",
              },
            })}
            type="text"
            placeholder="Enter your name"
            className="w-full border  rounded-lg px-4 py-2 outline-none focus:border-blue-500"
          />
          {errors.name && (
            <p className="text-red-600 font-semibold">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            {...register("email", {
              required: "email is required",
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full border  rounded-lg px-4 py-2 outline-none focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-600 font-semibold">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "mimimum 5 digits is required",
              },
              maxLength: {
                value: 12,
                message: "maximum limit is 12 digits",
              },
            })}
            type="password"
            placeholder="Enter your password"
            className="w-full border  rounded-lg px-4 py-2 outline-none focus:border-blue-500"
          />
          {errors.password && (
            <p className="text-red-600 font-semibold">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            {...register("image", {
              required: "Image is required",
            })}
            type="url"
            placeholder="Paste image URL"
            className="w-full border  rounded-lg px-4 py-2 outline-none focus:border-blue-500"
          />
          {errors.image && (
            <p className="text-red-600 font-semibold">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
