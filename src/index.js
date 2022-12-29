import React, { lazy,Suspense  } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Ducat , Route,Routes } from 'react-router-dom';
import Travallandingpage from './modules/traval/travallandingpage';
import Educationlandingpage from './modules/education/Educationlandingpage';
import Welcome from './Welcome';
import Mylist from './modules/purchase/Mylist';
import Apidata from './modules/purchase/Apidata';
import { Myprodut } from './modules/sales/Mysales';
import Errorpage from './Errorpage'; 
import Regform from './modules/education/Regform';
import Details from './modules/sales/Details';
import Mylocal from './modules/mystore/Mylocal';
const Mymain =lazy(()=>import('./modules/classess/Main'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Ducat>
      <Routes>
        
        <Route path='' element={<Welcome/>}/>
        <Route path='traval' element={<Travallandingpage/>}/>
        <Route path='education' element={<Educationlandingpage />}/>
        <Route path='purchase' element={<Mylist />}/>
        <Route path='api' element={<Apidata />}/>
        <Route path='sales' element={<Myprodut />}/>
        <Route path="/sales/:id" element={<Details />}/>
        <Route path='*' element={<Errorpage />} />
        <Route path='education/forms' element={<Regform />} />

        {/* <Route path='class' element={<Main />}/> */}
        <Route path='class' element={
          <Suspense fallback={<div style={{backgroundColor:'red'}}>Loading.....</div>}>
          <Mymain/>
        </Suspense>
        }/>
        <Route path='local' element={<Mylocal/>} />
      </Routes>

    
    </Ducat>

  </React.StrictMode>
);

