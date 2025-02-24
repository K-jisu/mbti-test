const CommonContainer = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl p-10 w-full max-w-lg">
      {children}
    </div>
  );
};

export default CommonContainer;
