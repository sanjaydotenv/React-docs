import React from "react";

const About = ({ greet }) => {
  console.log("About Rendering...");

  return (
    <div>
      <h1>This is About</h1>
    </div>
  );
};

export default React.memo(About);
