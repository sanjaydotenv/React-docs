import React from "react";

const Home = ({ user }) => {
  console.log("Home Rendering...");

  return <div></div>;
};

export default React.memo(Home, (prevProps, nextProp) => {
  return prevProps.user.name === nextProp.user.name;
});
