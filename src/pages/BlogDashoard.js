import React from 'react'
import { Fragment } from 'react';
import { Link,Outlet } from 'react-router-dom';
import '../style.css';


function BlogDashoard() {
  return(
   <Fragment>
    <div className='myscondnav'>
    <Link to="blog">Blog1</Link>
    <Link to="list">Api data list</Link>
    <Link to="blog">Blog3</Link>
    <Link to="blog">Blog4</Link>
   <Outlet/>
    </div>

   </Fragment>
  )
}

export default BlogDashoard