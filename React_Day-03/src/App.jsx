import React from "react";
import Component from "./Component";

const App = () => {
  let ui = React.createElement("div", {id: "test"}, [
    React.createElement(
      "div",
      {},
      React.createElement("h2", {}, "This ia a h2"),
      React.createElement("span", {}, "This ia a span"),
    ),
  ]);
  

  return (
    <div>
      {ui}
      <Component data={ui} />
    </div>

    // <div>
    //   <div>
    //     <h2>This is a h2</h2>
    //     <span>This is a span</span>
    //   </div>
    // </div>
  );
};

export default App;
