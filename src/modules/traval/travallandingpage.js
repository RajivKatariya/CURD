import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Myroutepage from './Myroute';
import Navbar from './Navbar';



function travallandingpage() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='traval/travalmap' element={<Myroutepage />} />

    </Routes>
    <Outlet ></Outlet>
    </>
  )
}

export default travallandingpage