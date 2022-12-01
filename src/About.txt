import React from 'react';
import { useState } from 'react';


function About() {

const [statevariable,statefunction]=useState("kumar singh");

const abc= ()=>{
  statefunction("ducat india");

}

const [a,b]=useState('red');

const mycolor = (myelement)=>{
    console.log(myelement.target.value);
    b(myelement.target.value);

}

const [c,d]=useState(20);
const xyz = (myel)=>{
    d(myel.target.value);

}

  return (
    <div style={{backgroundColor:`${a}`}}>

    <h1 style={{fontSize:`${c}px`}}>welcome to about page</h1>
    <div className="card">
  <img src="image/img.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <h1 onClick={abc}>{statevariable}</h1>
    
    <input type="color" onChange={mycolor} />
    <select onChange={xyz}>
      <option>20</option>
      <option>30</option>
      <option>40</option>
      <option>50</option>
      <option>70</option>
    </select>

  </div>
</div>

    </div>
  )
}

export default About