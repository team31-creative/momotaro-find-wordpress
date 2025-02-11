import React from 'react';
import logo from './logo.svg';
import './App.css';
import MJButton from './components/MJButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MJButton onClick={() => console.log('Hello')}>Click me!</MJButton>
      </header>
    </div>
  );
}

export default App;
