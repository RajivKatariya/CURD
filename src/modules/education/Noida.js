import React, { useEffect, useState } from 'react';
import '../../style.css';
import { First } from './Fee';

function Noida(props) {
  const a=80;
  const b = <First />
 

  
const [one,two]=useState([]);

useEffect((x)=>{
  if(a>70)
  {
    x=b;
    two(x);
  }
});




  return (
    <>
    <div className='box'>Noida {props.location}</div>
      hi{one} helo
    </>
  )
}

export default Noida