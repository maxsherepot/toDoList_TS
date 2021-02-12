import React, { useState, useEffect } from 'react';
import './App.css';
import DeleteModal from './components/DeleteModal';
import NewTaskInput from './components/NewTaskInput';
import TasksList from './components/TasksList';
import { TaskInterface } from './interfaces/interfaces';



const App: React.FC = () => {
  const [taskId, setTaskId] = useState<number | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks") || "[]") as TaskInterface[];
    setTasks(localTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onAddTask = (title: string) => {
    const newTask: TaskInterface = {
      title,
      id: Date.now(),
      done: false
    };
    if (title != "") {
      setTasks(tasks => [newTask, ...tasks]);
    };
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
      }));
  };

  const onOpenDeleteModal = (id: number): void => {
    setTaskId(id);
    setModal(true);
  };

  const onCloseDeleteModal = (): void => {
    setModal(false);
  };

  const onDeleteTask = (): void => {
    setTasks(prev => prev.filter(todo => todo.id !== taskId));
    setModal(false);
  };


  return (
    <div className="container">
      {modal &&
        <DeleteModal
          onDeleteTask={onDeleteTask}
          onCloseDeleteModal={onCloseDeleteModal} />
      }
      <NewTaskInput onAddTask={onAddTask} />
      <TasksList
        tasks={tasks}
        onCompleteTask={onCompleteTask}
        onOpenDeleteModal={onOpenDeleteModal} />
    </div>
  );
};


export default App;
