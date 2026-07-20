import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  
  const [toggle, setToggle] = useState(true);
  const [userData, setUserData] = useState([]);

  return (
    <div className="bg-gray-100 h-screen flex flex-col overflow-hidden">
      <div>
        <Navbar setToggle={setToggle} />
      </div>
      {toggle ? (
        <div className="flex flex-wrap">
          {userData.map((user , idx) => {
            return <Usercard key={idx} user={user} setToggle={setToggle} />;
          })}
        </div>
      ) : (
        <div>
          <Form setUserData={setUserData} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
