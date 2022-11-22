import React from 'react';
import ReactDOM from 'react-dom/client';
import Myhome from './components/Home';
import Mybout from './components/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Myhome />
  <Mybout></Mybout>
  </React.StrictMode>
);

