import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <h1>Let's build gmail</h1>
    </div>
  );
}

export default App;
