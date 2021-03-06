import React, { useState, useEffect } from 'react';
import './App.css';
import DeleteModal from './components/DeleteModal';
import FilterPanel from './components/FilterPanel';
import NewTaskInput from './components/NewTaskInput';
import TasksList from './components/TasksList';
import { ITask } from './interfaces/interfaces';
import { v4 as uuidv4 } from 'uuid';
import SearchPanel from './components/SearchPanel';


const App: React.FC = () => {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [doneTasks, setDoneTasks] = useState<number>(0);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");


  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks") || "[]") as ITask[];
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
    const newTask: ITask = {
      title,
      id: uuidv4(),
      done: false,
      important: false
    };
    if (title.trim() !== "") {
      setTasks(tasks => [newTask, ...tasks]);
    };
  };

  const onCompleteTask = (id: string) => {
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

  const onMakeImportantTask = (id: string) => {
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

  const onOpenDeleteModal = (id: string): void => {
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

  const onSetFilter = (filter: string): void => setFilter(filter);

  const filterItems = (tasks: ITask[], filter: string) => {
    switch (filter) {
      case "all":
        return tasks
      case "done":
        return tasks.filter(item => item.done)
      case "active":
        return tasks.filter(item => !item.done)
      default: return tasks
    };
  };

  const onSetSearch = (title: string): void => setSearch(title);

  let filteredItems: ITask[] = filterItems(tasks, filter);

  let visibleItems: ITask[] = filteredItems.filter(item => item.title.includes(search));


  return (
    <div className="container">
      {modal &&
        <DeleteModal
          onDeleteTask={onDeleteTask}
          onCloseDeleteModal={onCloseDeleteModal} />
      }
      <NewTaskInput onAddTask={onAddTask} />
      <SearchPanel onSetSearch={onSetSearch} />
      <FilterPanel
        filter={filter}
        doneTasks={doneTasks}
        onSetFilter={onSetFilter}
        onDeleteDoneTasks={onDeleteDoneTasks} />
      <TasksList
        tasks={visibleItems}
        onCompleteTask={onCompleteTask}
        onMakeImportantTask={onMakeImportantTask}
        onOpenDeleteModal={onOpenDeleteModal} />
    </div>
  );
};


export default App;
