import React, { useState } from "react";

const FormHandlingBruteForceApproach = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(name, password, email);

  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Form Handling Brute Force Approach
      </h1>
      <div className="flex flex-col gap-5 w-102 mt-5">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border-2 px-5 py-2"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border-2 px-5 py-2"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border-2 px-5 py-2"
          type="text"
          placeholder="Password"
        />
      </div>

      <div className="mt-5 text-2xl flex flex-col gap-5">
        <h1>This ia Name - {name}</h1>
        <h1>This ia Email - {email}</h1>
        <h1>This ia Pasword - {password}</h1>
      </div>
    </div>
  );
};

export default FormHandlingBruteForceApproach;
