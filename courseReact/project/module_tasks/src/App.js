import logo from './logo.svg';
import './App.css';
import React from 'react';
import Task1 from './tasks/Task1';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>React Tasks</h1>
      <Task1 />
    </div>
  );
}

export default App;
