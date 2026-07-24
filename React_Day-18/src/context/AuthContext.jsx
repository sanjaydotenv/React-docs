import { createContext, useState } from "react";

export const AuthContextAPI = createContext();

export const AuthContextProvider = ({ children }) => {
    
  const [registerUsers, setRegisterUsers] = useState([]);

  return (
    <AuthContextAPI.Provider value={{ registerUsers, setRegisterUsers }}>
      {children}
    </AuthContextAPI.Provider>
  );
};
