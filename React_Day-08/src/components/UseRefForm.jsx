import React, { useRef, useState } from "react";

const UseRefForm = () => {
  console.log("rendering");

  let formData = useRef([]);
  const [users, setUsers] = useState([]);

  console.log(formData)

  console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();

    let name = formData.current.name.value;
    let price = formData.current.price.value;
    let category = formData.current.category.value;
    let image = formData.current.image.value;

    let obj = {
      name,
      price,
      category,
      image,
    };

    setUsers([...users, obj]);
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center flex-col">
      <div className="w-102 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            ref={(e) => (formData.current.name = e)}
            type="text"
            placeholder="Product Name"
            className="w-full border  rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />

          <input
            ref={(e) => (formData.current.price = e)}
            type="text"
            placeholder="Price"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Category
            </label>

            <select
              ref={(e) => (formData.current.category = e)}
              className="w-full border  rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white"
            >
              <option value="MENS">👔 MENS</option>
              <option value="WOMEN">👗 WOMEN</option>
              <option value="KIDS">🧸 KIDS</option>
            </select>
          </div>

          <input
            ref={(e) => (formData.current.image = e)}
            type="text"
            placeholder="Image URL"
            className="w-full border  rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UseRefForm;
