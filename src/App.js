import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FacebookLoginButton } from "react-social-login-buttons";
import Login from './Components/login.js';
import Register from './Components/register.js';
import Home from './Components/home.js';
import Background from './Components/background.js';
import Logo from './Components/logo';

function App() {

  return (
    <div >
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  );
}
  
  export default App;