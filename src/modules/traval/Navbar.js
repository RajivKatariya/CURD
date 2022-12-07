import React from 'react'
import { Link, Outlet, Route, Routes,  } from 'react-router-dom';
import '../../style.css'
import Cargallery from './Cargallery';
import Myroutepage from './Myroute';

function Navbar() {
  return (
    <>
    <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <Link to="travalmap" className='mynav'> Traval map </Link>
        <Link to="expance" className='mynav'> Expance </Link>
        <Link to="route" className='mynav'> Route </Link>
      </ul>
      
    </header>
  </div>
 
  <Routes>
      <Route path='/' element={<Cargallery />} />
      <Route path='travalmap' element={<Myroutepage />} />
  </Routes>
  
  <Outlet />
  </>
  )
}

export default Navbar