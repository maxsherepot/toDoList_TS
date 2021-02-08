import React, { useState } from 'react';
import './App.css';
import NewTaskInput from './components/NewTaskInput';
import TasksList from './components/TasksList';
import { TaskInterface } from './interfaces/interfaces';



const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([
    { title: "first tasks", id: 1, done: false },
    { title: "second tasks", id: 2, done: true },
  ]);


  const onAddTask = (title: string) => {
    const newTask: TaskInterface = {
      title,
      id: Date.now(),
      done: false
    };
    setTasks(tasks => [newTask, ...tasks]);
  };



  return (
    <div className="container">
      <NewTaskInput onAddTask={onAddTask} />

      <TasksList tasks={tasks} />
    </div>
  );
}


export default App;
