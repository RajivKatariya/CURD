import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Ducat , Route, Routes } from 'react-router-dom';
import Travallandingpage from './modules/traval/travallandingpage';
import Educationlandingpage from './modules/education/Educationlandingpage';
import Welcome from './Welcome';
import Mynav from './Mynav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ducat>
      <Routes>
        
        <Route path='' element={<Welcome/>}/>
        <Route path='traval' element={<Travallandingpage/>}/>
        <Route path='education' element={<Educationlandingpage />}/>
        
      </Routes>
    
    
    </Ducat>

  </React.StrictMode>
);

