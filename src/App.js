import React, { useState } from 'react';
import './App.css';
import LeftPart from './components1/LeftPart';
import RightPart from './components1/RightPart';
import './Styles/page1.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components1/Main';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/home" element={<Home/>}  />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
