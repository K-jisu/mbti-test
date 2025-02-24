const CommonForm = ({ children, onSubmit }) => {
  return (
    <form
      className="space-y-8 bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-lg "
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

export default CommonForm;
