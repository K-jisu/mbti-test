import React from "react";

const AuthBtn = ({ content }) => {
  return (
    <button className="w-full bg-primary-color text-white py-3 rounded-lg hover:bg-background-color transition duration-300 hover:text-[#FF5A5F]">
      {content}
    </button>
  );
};

export default AuthBtn;
