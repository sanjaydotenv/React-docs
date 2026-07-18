import React, { useContext, useEffect } from "react";
import { MyContext } from "./context/MyContext";

const Contact = () => {
  // const { count } = useContext(MyContext);

  console.log("hy this is Contact");

  let interval = setInterval(() => {
    console.log("Contact Interval");
  }, 1000);

  useEffect(() => {
    console.log("useEffect Triggered");

    return () => {
      console.log("Contact unMount");
      clearInterval(interval);
    };
  }, []);

  return <div></div>;
};

export default Contact;
