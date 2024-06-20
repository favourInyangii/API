// src/App.js
import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the User List App</h1>
      </header>
      <UserList />
    </div>
  );
}

export default App;
