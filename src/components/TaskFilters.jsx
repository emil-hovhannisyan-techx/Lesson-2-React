import { Filter, Check } from "lucide-react";
import "../styles/components/TaskFilters.css";

const TaskFilters = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: "all", label: "All Tasks", icon: Filter },
    { key: "pending", label: "Pending", icon: null },
    { key: "completed", label: "Completed", icon: Check },
  ];

  return (
    <div className="filters">
      {filters.map((filter) => {
        const Icon = filter.icon;
        return (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-btn ${
              currentFilter === filter.key ? "active" : ""
            }`}
          >
            {Icon && <Icon size={16} />}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default TaskFilters;
