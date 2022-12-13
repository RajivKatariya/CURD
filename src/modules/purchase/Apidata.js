import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Apidata() {

const [apivari, apifunction] = useState([]);
  
const Myapidata = ()=> 
{
    axios
    .get('https://jsonplaceholder.typicode.com/posts').then((pp)=>{
        console.log(pp.data);
        apifunction(pp.data);
    });

}
  
    return (
    <>
    <button type="button" onClick={Myapidata}>Api data fatch</button>
    {apivari.map( (a)=>(
        <h1 key={a.id}>{a.id}</h1>
    ))}
    </>


  )
}

export default Apidata