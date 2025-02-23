const CommonInput = ({ id, type, name, value, placeholder, onChange }) => {
  return (
    <input
      className="w-full p-4 border border-gray-300 rounded-lg"
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default CommonInput;
