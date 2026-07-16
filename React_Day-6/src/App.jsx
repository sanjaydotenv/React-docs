import React from "react";
import Rendering from "./components/Rendering";
import FormHandlingBruteForceApproach from "./components/FormHandlingBruteForceApproach";
import FormHandlingBetterApproach from "./components/FormHandlingBetterApproach";
import FormHandlingOptimizeApproach from "./components/FormHandlingOptimizeApproach";

const App = () => {
  return (
    <div className="bg-black text-white h-full flex flex-col gap-10 p-5">
      <Rendering />
      <hr />
      <FormHandlingBruteForceApproach />
      <hr />
      <FormHandlingBetterApproach />
      <hr />
      <FormHandlingOptimizeApproach />
    </div>
  );
};

export default App;
