// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TimerInput from './components/TimerInput';
import TimerDisplay from './components/TimerDisplay';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Countdown Timer with Redux</h1>
        <TimerInput />
        <TimerDisplay />
      </div>
    </Provider>
  );
}

export default App;