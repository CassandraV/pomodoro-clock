import React from 'react';
import './App.css';
import Timer from '../timer/Timer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          A pomodoro-clock! 
        </p>
      </header>
      <Timer></Timer>
    </div>
  );
}

export default App;
