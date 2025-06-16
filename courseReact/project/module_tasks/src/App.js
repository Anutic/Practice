import logo from './logo.svg';
import './App.css';
import React from 'react';
import Task1 from './tasks/Task1';
import Task2 from './tasks/Task2';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>React Tasks</h1>
      <Task1 />
      <hr style={{ margin: '40px 0' }} />
      <Task2 />
    </div>
  );
}

export default App;
