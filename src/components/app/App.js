import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from '../timer/Timer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Another pomodoro-clock!
        </p>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <Timer></Timer>
    </div>
  );
}

export default App;
