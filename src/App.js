import React from 'react';
import logo from './dwc-logo-flat.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Digital Water Consulting logo" />
        <button className="menu-button">Menu</button>
      </header>
    </div>
  );
}

export default App;
