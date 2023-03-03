import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './modules/auth/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Ladding from './modules/dashboard/Landing';


import reportWebVitals from './reportWebVitals';
import Registor from './modules/auth/Registor';
import Singlepage from './modules/dashboard/Singlepage';
import Editpage from './modules/dashboard/Editpage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>} />
      <Route path='reg' element={<Registor/>} />
      <Route path='landing' element={<Ladding />}/>
      <Route path='view/:id' element={<Singlepage />}/>
      <Route path='edit/:id' element={<Editpage />}/>
    </Routes>
       


        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
