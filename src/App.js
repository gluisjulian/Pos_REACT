import React from 'react';
import logo from './logo.svg';
import './App.css';
import AgendaList from './agenda/AgendaList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AgendaList />
      </header>
    </div>
  );
}

export default App;
