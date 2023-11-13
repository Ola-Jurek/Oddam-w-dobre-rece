import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LogIn} from "./components/Log_in.jsx";
import {CreateAccount} from "./components/Create_account.jsx";
import {LogOut} from "./components/Log_out.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/logowanie" element={<LogIn/>} />
              <Route path="/rejestracja" element={<CreateAccount/>}/>
              <Route path="/wylogowano" element={<LogOut/>}/>
          </Routes>
      </BrowserRouter>

  </React.StrictMode>,
)
