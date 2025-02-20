import React from "react";

const AuthInput = ({ type, value, placeholder, onchange }) => {
  return (
    <input
      className="w-full p-4 border border-gray-300 rounded-lg"
      type={type}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
    />
  );
};

export default AuthInput;
