import React from "react";
import { createContext } from "react";
import { useState } from "react";

const accessToken = localStorage.getItem("accessToken");

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);

  const accessLogin = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    setIsAuthenticated(true);
  };

  const accessLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, accessLogin, accessLogout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
