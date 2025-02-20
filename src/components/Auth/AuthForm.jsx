import React from "react";

const AuthForm = ({ children }) => {
  return (
    <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
      {children}
    </form>
  );
};

export default AuthForm;
