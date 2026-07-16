import React, { useState } from "react";

const FormHandlingOptimizeApproach = () => {
  console.log("App Re-rendering");
  const [formData, setFormData] = useState({});

  console.log(formData);

  const handleChange = (e) => {
    let { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Form Handling Optimize Approach</h1>
      <div className="flex flex-col gap-5 w-102 mt-5">
        <input
          name="name"
          onChange={handleChange}
          className="border-2 px-5 py-2"
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          onChange={handleChange}
          className="border-2 px-5 py-2"
          type="text"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleChange}
          className="border-2 px-5 py-2"
          type="text"
          placeholder="Password"
        />
      </div>

      <div className="mt-5 text-2xl flex flex-col gap-5">
        <h1>This ia Name - </h1>
        <h1>This ia Email - </h1>
        <h1>This ia Pasword - </h1>
      </div>
    </div>
  );
};

export default FormHandlingOptimizeApproach;
