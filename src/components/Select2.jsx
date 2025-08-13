import "../styles/components/Select.css";
import Select from "react-select";

const Select2 = ({
  value,
  onChange,
  options,
  className = "",
  name = "selectDefault",
}) => {
  const selectedOption =
    options.find((option) => option.value === value) || null;

  const handleChange = (selectedOption) => {
    onChange(selectedOption ? selectedOption.value : "");
  };

  return (
    <div className="react-select-container">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        className={className}
        name={name}
        placeholder="Select priority..."
        isSearchable={false}
        classNamePrefix={"react-select"}
      />
    </div>
  );
};
// const Select2 = ({
//   value,
//   onChange,
//   options,
//   className = "",
//   name = "selectDefault",
// }) => {
//   return (
//     <select
//       value={value}
//       className={`priority-select ${className}`}
//       onChange={(e) => onChange(e.target.value)}
//       name={name}
//     >
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// };

export default Select2;
