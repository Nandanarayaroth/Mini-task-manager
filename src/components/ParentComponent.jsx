import React from 'react'
import TaskForm from './TaskForm';
import Status from './Status';
import Filter from './Filter';

export default function ParentComponent() {
  return (
    <div>
      <div className="min-h-screen bg-gra-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
        <TaskForm/>
        <TaskManager/>
        <Filter/>
        <Status/>
      </div>
    </div>
  );
}
