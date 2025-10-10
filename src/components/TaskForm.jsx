import React, { use, useEffect, useState } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask={
      id:Date.now(),
      title,
      description,
      priority,
      status:"To Do"
    }
    onAddTask(newTask);
    setTitle("");
    setDescription("");
    setPriority("Low")
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4 w-full max-w-lg mx-auto flex flex-col gap-4 ">
      <h3 className="text-lg font-semibold">Add New Task</h3>

      <div>
        <label className="text-gray-700 font-medium block mb-1">Title</label>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="text-gray-700 font-medium block mb-1">
          Description
        </label>
        <textarea
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="text-gray-700 font-medium block mb-1">Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <button className="bg-blue-600 text-white py-2 px-2 rounded hover:bg-blue-700 transition-all">
        Add Task
      </button>
    </form>
  );
}
