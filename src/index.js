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
import { Provider } from 'react-redux';
import { Mystorage } from './store/Mystore';
import Order1 from './store/Order';
import Gallery from './modules/education/Gallery';
import Matrialuihome from './matrialUI/Matrialuihome';
import { Auth0Provider } from '@auth0/auth0-react';
import Myloginpage from './Myloginpage';
import Blog1 from './pages/Blog1';
import BlogDashoard from './pages/BlogDashoard';
import Mylist1 from './pages/Mylist';
const Mymain =lazy(()=>import('./modules/classess/Main'));
// const domain = process.env.REACT-AUTH0-DOMAIN-ID;
// const clit = process.env.REACT-AUTH0-CLIENT-ID;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>

<Provider store={Mystorage}>
  {/* <Auth0Provider
   domain="dev-2lztdozl12hbrfpe.us.auth0.com"
   client="hvuSOD9PvV8xRyD8giVc41DHrUQWMOs2"
   redirectUri={window.location.origin}
   > */}
    <Ducat>
      <Routes>
        <Route path='' element={<Welcome/>}/>
        {/* <Route path='' element={<Myloginpage/>}/> */}
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
        <Route path='redux' element={<Order1/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='matrialdesign' element={<Matrialuihome/>} />
          {/* <Route path='dashboard' element={<BlogDashoard/>}/>
          <Route path='dashboard/blog' element={<Blog1/>}/> */}

        <Route path='dashboard' element={<BlogDashoard/>}>
          <Route path='blog' element={<Blog1/>}/>
          <Route path='list' element={<Mylist1/>}/>
          <Route path='others' element={<Blog1/>}/>
        </Route>


      </Routes>
    </Ducat>
    {/* </Auth0Provider> */}
    </Provider>

  </React.StrictMode>
);

