import React from 'react';
import './App.css';
import NewTaskInput from './components/NewTaskInput';
import TasksList from './components/TasksList';


const App: React.FC = () => {

  return (
    <div className="container">
      <NewTaskInput />
    <TasksList/>
    </div>
  );
}


export default App;
