const CommonInput = ({ type, name, value, placeholder, onChange }) => {
  return (
    <input
      className="w-full p-4 border border-gray-300 rounded-lg"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default CommonInput;
