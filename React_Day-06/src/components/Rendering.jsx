import React from "react";
import { useState } from "react";

const Rendering = () => {
  const [count, setCount] = useState(0);
  let [user, setUser] = useState({ name: "hello" });

  console.log("rendering");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">State And Rendering </h1>

      <h1>Count is - {count}</h1>
      <h1>Name is - {user.name}</h1>
      <button
        className="px-10 py-2 bg-blue-700 rounded-xl"
        onClick={() => {
          setCount(count + 1);
        }}
        style={{ padding: "10px 30px" }}
      >
        Increment
      </button>
      <button
        className="px-10 py-2 bg-blue-700 rounded-xl"
        onClick={() => {
          user.name = "world";
        }}
        style={{ padding: "10px 30px", marginLeft: "10px" }}
      >
        Chnage Name
      </button>
    </div>
  );
};

export default Rendering;
