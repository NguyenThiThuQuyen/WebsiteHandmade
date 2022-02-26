import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react';
import Home from './page/Home/Home';
import './App.css';

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
