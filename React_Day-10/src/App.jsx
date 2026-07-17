import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );
  const [updatedData, setUpdatedData] = useState(null);


  const deleteUser = (id) => {
    const filterData = userData.filter((data) => data.id !== id);
    localStorage.setItem("userData", JSON.stringify(filterData));
    setUserData(filterData);
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <div>
        <Navbar setToggle={setToggle} />
      </div>
      {toggle ? (
        <div className="flex flex-wrap">
          {userData.map((user, idx) => {
            return (
              <Usercard
                deleteUser={deleteUser}
                setUpdatedData={setUpdatedData}
                key={idx}
                user={user}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Form
            updatedData={updatedData}
            setUpdatedData={setUpdatedData}
            userData={userData}
            setUserData={setUserData}
            setToggle={setToggle}
          />
        </div>
      )}
    </div>
  );
};

export default App;
