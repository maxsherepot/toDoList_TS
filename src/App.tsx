import React from 'react';
import './App.css';
import NewTaskInput from './components/NewTaskInput';


const App: React.FC = () => {

  return (
    <div className="container">
      <NewTaskInput />
    </div>
  );
}


export default App;
