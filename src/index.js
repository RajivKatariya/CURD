import React from 'react';
import ReactDOM from 'react-dom/client';
import Myhome from './components/Home';
import Mybout from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="home" element={<Myhome />} />
        <Route path='about' element={<Mybout/>} />

    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

