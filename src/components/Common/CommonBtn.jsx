const CommonBtn = ({ content, type }) => {
  return (
    <button
      className=" w-full bg-blue-600 text-white py-3 px-4 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 duration-300"
      type={type}
    >
      {content}
    </button>
  );
};

export default CommonBtn;
