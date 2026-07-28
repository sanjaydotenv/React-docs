import { createContext, useEffect, useState } from "react";

export const AuthContextAPI = createContext();

export const AuthContextProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("registerUsers")) || [];
    } catch {
      return [];
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const logout = () => setCurrentUser(null);

  return (
    <AuthContextAPI.Provider
      value={{
        registerUsers,
        setRegisterUsers,
        currentUser,
        setCurrentUser,
        logout,
      }}
    >
      {children}
    </AuthContextAPI.Provider>
  );
};
