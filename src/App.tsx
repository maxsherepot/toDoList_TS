import React, { useState } from 'react';
import './App.css';
import NewTaskInput from './components/NewTaskInput';
import TasksList from './components/TasksList';
import { TaskInterface } from './interfaces/interfaces';



const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([
    { title: "first tasks", id: 1111, done: false },
    { title: "second tasks", id: 2222, done: true },
  ]);


  const onAddTask = (title: string) => {
    const newTask: TaskInterface = {
      title,
      id: Date.now(),
      done: false
    };
    setTasks(tasks => [newTask, ...tasks]);
  };


  const onCompleteTask = (id: number) => {
    setTasks(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      }))
  };



  return (
    <div className="container">
      <NewTaskInput onAddTask={onAddTask} />

      <TasksList
        tasks={tasks}
        onCompleteTask={onCompleteTask}
      />
    </div>
  );
}


export default App;
