import React, { useState } from "react";

const FormHandlingBetterApproach = () => {
  const [formData, setFormData] = useState({
  });

  console.log(formData)


  return (
    <div>
      <h1 className="text-2xl font-semibold">Form Handling Better Approach</h1>
      <div className="flex flex-col gap-5 w-102 mt-5">
        <input onChange={(e) => {
            setFormData({...formData , name: e.target.value})
        }} className="border-2 px-5 py-2" type="text" placeholder="Name" />
        <input onChange={(e) => {
            setFormData({...formData , email: e.target.value})
        }} className="border-2 px-5 py-2" type="text" placeholder="Email" />
        <input onChange={(e) => {
            setFormData({...formData , password: e.target.value})
        }}
          className="border-2 px-5 py-2"
          type="text"
          placeholder="Password"
        />
      </div>

      <div className="mt-5 text-2xl flex flex-col gap-5">
        <h1>This ia Name - {formData.name}</h1>
        <h1>This ia Email - {formData.email}</h1>
        <h1>This ia Pasword - {formData.password}</h1>
      </div>
    </div>
  );
};

export default FormHandlingBetterApproach;
