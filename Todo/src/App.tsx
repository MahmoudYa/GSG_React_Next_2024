
import  { useState } from 'react';
import FormComponent from './components/Form.component/FormComponent';
import TodoDataComponent from './components/TodoData.component/TodoDataComponent';
import AllTodosComponent from './components/AllTodo.component/AllTodosComponent';
import './App.css'
import Day from './components/Day/Day';

interface Task {
  id: number;
  title: string;
  isUrgent: boolean;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, isUrgent: boolean) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      isUrgent,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleCompletion = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    
    <div className='mainApp'>
      <h1>Todo List</h1>
      <Day/>
      <FormComponent addTask={addTask} />
      <TodoDataComponent tasks={tasks} />
      <AllTodosComponent tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
    </div>
  );
}
export default App
