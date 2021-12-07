import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />}>
            </Route>
            <Route path="/" element={<EmailList />}>
            </Route>
          </Routes>
        </div>

        <h1>Let's build gmail</h1>
      </div>
    </Router>

  );
}

export default App;
