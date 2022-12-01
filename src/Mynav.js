import React from 'react'
import { Link } from 'react-router-dom'

function Mynav() {
  return (
    <div>
        <Link to="#">Home</Link>
        <Link to="sales">Sales</Link>
        <Link to="purchase">Purchase</Link>
        <Link to="education">Education</Link>
        <Link to="traval">Traval</Link>
        
       


    </div>
  )
}

export default Mynav