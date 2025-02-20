import React from "react";

const AuthContainer = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
      {children}
    </div>
  );
};

export default AuthContainer;
