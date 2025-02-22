const CommonContainer = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
      {children}
    </div>
  );
};

export default CommonContainer;
