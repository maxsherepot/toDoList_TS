import React, { useState, useEffect } from 'react';
import './App.css';
import DeleteModal from './components/DeleteModal';
import FilterPanel from './components/FilterPanel';
import NewTaskInput from './components/NewTaskInput';
import TasksList from './components/TasksList';
import { TaskInterface } from './interfaces/interfaces';



const App: React.FC = () => {
  const [taskId, setTaskId] = useState<number | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [doneTasks, setDoneTasks] = useState<number>(0);

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks") || "[]") as TaskInterface[];
    setTasks(localTasks);
  }, []);

  const countDoneTasks = (): void => {
    const quantity = tasks.filter(item => item.done);
    setDoneTasks(quantity.length);
  };

  useEffect(() => {
    countDoneTasks();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onAddTask = (title: string) => {
    const newTask: TaskInterface = {
      title,
      id: Date.now(),
      done: false,
      important: false
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

  const onMakeImportantTask = (id: number) => {
    setTasks(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            important: !todo.important
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

  const onDeleteDoneTasks = (): void => {
    setTasks(prev => prev.filter(todo => !todo.done));
  };


  return (
    <div className="container">
      {modal &&
        <DeleteModal
          onDeleteTask={onDeleteTask}
          onCloseDeleteModal={onCloseDeleteModal} />
      }
      <NewTaskInput onAddTask={onAddTask} />
      <FilterPanel
        doneTasks={doneTasks}
        onDeleteDoneTasks={onDeleteDoneTasks} />

      <TasksList
        tasks={tasks}
        onCompleteTask={onCompleteTask}
        onMakeImportantTask={onMakeImportantTask}
        onOpenDeleteModal={onOpenDeleteModal} />
    </div>
  );
};


export default App;
