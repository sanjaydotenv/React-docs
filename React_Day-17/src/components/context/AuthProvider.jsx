import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")),
  );

  const [productsData, setProductsData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        setRegisterUsers,
        registerUsers,
        loggedInUser,
        setLoggedInUser,
        setProductsData,
        productsData,
        usersData,
        setUsersData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
