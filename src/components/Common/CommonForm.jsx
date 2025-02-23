const CommonForm = ({ children, onSubmit }) => {
  return (
    <form
      className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
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
