import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Mylocal() {

    // localStorage.setItem("pname","5000");
    
    const [datavalue,datafunction]=useState(0)
    const getinputdata =(e)=>{
        console.log(datavalue);
        datafunction(e.target.value);
        localStorage.setItem('pname',datavalue);
    }

const abc = ()=>{

    // window.navigation.canGoBack=true
    alert("ok")

}

  return (
    <div>
        
    <input type="text" value={datavalue} onInput={getinputdata}/>
    <Link to="/class">Back to class component</Link>
    <button type='button' onClick={abc}> back</button>

    </div>
  )
}

export default Mylocal