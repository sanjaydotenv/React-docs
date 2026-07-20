import React, { useState } from "react";
import ReactHookForm from "./components/ReactHookForm";
import UseRefForm from "./components/UseRefForm";

const App = () => {
  const [toggle, setToggle] = useState(true);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col gap-5">
      {toggle === true ? <ReactHookForm /> : <UseRefForm />}

      <div className="flex gap-4 justify-center mb-10">
        <button
          onClick={() => {
            setToggle(true);
          }}
          className={`px-8 py-3 rounded-2xl backdrop-blur-lg border shadow-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer ${
            toggle
              ? "bg-green-500 text-white border-green-500"
              : "bg-white/20 text-gray-800 border-white/30"
          }`}
        >
          React Hook Form
        </button>

        <button
          onClick={() => {
            setToggle(false);
          }}
          className={`px-8 py-3 rounded-2xl backdrop-blur-lg border shadow-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer ${
            !toggle
              ? "bg-green-500 text-white border-green-500"
              : "bg-white/20 text-gray-800 border-white/30"
          }`}
        >
          useRef Form
        </button>
      </div>
    </div>
  );
};

export default App;
