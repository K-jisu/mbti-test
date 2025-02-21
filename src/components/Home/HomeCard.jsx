import React from "react";

const HomeCard = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default HomeCard;
