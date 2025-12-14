// App.jsx
import React, { useState } from "react";
import TaskForm from "./components/TaskForm"

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    console.log("Task added:", task);
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            {task.title} - {task.priority} - {task.dueDate}
          </div>
        ))}
      </div>
    </div>
  );
}
