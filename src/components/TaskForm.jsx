import { useState } from "react";
import { Plus } from "lucide-react";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import "../styles/components/TaskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const priorityOptions = [
    { value: "low", label: "Low Priority" },
    { value: "medium", label: "Medium Priority" },
    { value: "high", label: "High Priority" },
  ];

  const handleSubmit = () => {
    if (title.trim()) {
      onAddTask({
        id: Date.now(),
        title: title.trim(),
        priority,
        completed: false,
      });
      setTitle("");
      setPriority("medium");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="task-form">
      <div className="input-group">
        <Input
          value={title}
          onChange={setTitle}
          placeholder="Add a new task..."
          onKeyDown={handleKeyDown}
        />
        <Select
          value={priority}
          onChange={setPriority}
          options={priorityOptions}
        />
        <Button onClick={handleSubmit} className="btn-primary">
          <Plus size={20} />
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default TaskForm;
