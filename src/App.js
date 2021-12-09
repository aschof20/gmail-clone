import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SendMail from './components/SendMail';
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser, login } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";


function App() {

  const user = useSelector(selectUser);

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }));
      }
    });
  }, []);

  return (
    <Router>

      {!user ? (
        <Login />
      ) : (
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
          {sendMessageIsOpen && <SendMail />}

        </div>
      )}

    </Router>

  );
}

export default App;
