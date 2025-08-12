import { useState } from "react";
import { Check, Edit2, Trash2 } from "lucide-react";
import Button from "./Button";
import "../styles/components/TaskItems.css";
const TaskItem = ({ task, onToggleComplete, onDeleteTask, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleEdit = () => {
    if (editTitle.trim() && editTitle !== task.title) {
      onEditTask(task.id, editTitle.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    } else if (e.key === "Escape") {
      setEditTitle(task.title);
      setIsEditing(false);
    }
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleEdit}
            className="edit-input"
            autoFocus
          />
        </div>
      ) : (
        <>
          <div className="task-content">
            <div className={`task-title ${task.completed ? "completed" : ""}`}>
              {task.title}
            </div>
            <div className={`task-priority priority-${task.priority}`}>
              {task.priority} priority
            </div>
          </div>
          <div className="task-actions">
            <Button
              onClick={() => onToggleComplete(task.id)}
              className="btn-icon"
            >
              <Check size={16} />
            </Button>
            <Button onClick={() => setIsEditing(true)} className="btn-icon">
              <Edit2 size={16} />
            </Button>
            <Button
              onClick={() => onDeleteTask(task.id)}
              className="btn-icon btn-danger"
            >
              <Trash2 size={16} />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
