import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gra-100 p-6'>
      <h1 className='text-2xl font-bold text-center mb-6'>Task Manager</h1>
      <TaskForm/>
    </div>
  );
}

export default App
