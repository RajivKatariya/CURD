import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div>
        <Link to="home" className='abc'>Home page</Link>
        <Link to="about" className='abc'>About page</Link>
        <Link to="contact" className='abc'>Contact page</Link>
    </div>
  )
}

export default Navbar