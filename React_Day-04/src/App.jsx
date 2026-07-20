import React, { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);


  console.log("Re-render");
  console.log(flag);
  

  return (
    <div>
      <h1>count is - {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        style={{ padding: "10px 30px", fontSize: "20px" }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setFlag(true);
        }}
        style={{ padding: "10px 30px", fontSize: "20px", marginLeft: "10px" }}
      >
        Change
      </button>
    </div>
  );
};

export default App;
