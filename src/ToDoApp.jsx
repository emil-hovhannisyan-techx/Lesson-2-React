import "./styles/App.css";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskItem from "./components/TaskItem";
import "./styles/responsive.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkmode] = useState(false);

  useEffect(() => {
    const savedTheme = false;
    setDarkmode(savedTheme);
  }, []);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.comlpeted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title: newTitle } : task))
    );
  };

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "completed":
        return task.completed;
      case "pending":
        return !task.completed;
      default:
        return true;
    }
  });

  const toggleTheme = () => {
    setDarkmode((prev) => !prev);
  };

  return (
    <>
      <div className={`app ${darkMode ? "dark" : "light"}`}>
        <div className="container">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <header className="header">
            <h1 className="title">My Tasks</h1>
            <p className="subtitle">Stay organized and productive</p>
          </header>

          <div className="main-card">
            <TaskForm onAddTask={addTask} darkMode={darkMode} />

            <TaskFilters currentFilter={filter} onFilterChange={setFilter} />

            <div className="tasks-container">
              {filteredTasks.length === 0 ? (
                <div className="empty-state">
                  <h3>No tasks found</h3>
                  <p>
                    {filter === "all"
                      ? "Add your first task above!"
                      : `No ${filter} tasks at the moment.`}
                  </p>
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={toggleComplete}
                    onDeleteTask={deleteTask}
                    onEditTask={editTask}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
