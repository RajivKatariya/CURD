import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Error from './Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />

        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<Error/>} />

        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

