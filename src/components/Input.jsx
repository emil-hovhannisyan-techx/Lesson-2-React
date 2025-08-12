import "../styles/components/Input.css";

const Input = ({
  value,
  onChange,
  placeholder,
  className = "",
  onKeyDown,
  name = "input",
}) => {
  return (
    <input
      type="text"
      value={value}
      className={`task-input ${className}`}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      name={name}
    />
  );
};

export default Input;
