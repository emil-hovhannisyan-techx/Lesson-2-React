import "../styles/components/Select.css";

const Select = ({
  value,
  onChange,
  options,
  className = "",
  name = "selectDefault",
}) => {
  return (
    <select
      value={value}
      className={`priority-select ${className}`}
      onChange={(e) => onChange(e.target.value)}
      name={name}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
