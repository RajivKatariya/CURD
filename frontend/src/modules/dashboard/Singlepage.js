import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Singlepage() {

    const {id} = useParams("");
    // console.log(id);

    const [singlev,singlef] =useState([]);
    
    const singleDetail = async(e)=>{
      const res = await fetch(`http://localhost:7000/view/${id}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
      })
      const data1 = await res.json();
      console.log(data1);
      singlef(data1);
    
    }
  
    useEffect(()=>{
        singleDetail();
    },[]);
  




  return (
    <div>
        <h1>Details page</h1>
        
        <h2>{singlev._id}</h2>
       <h2>{singlev.name}</h2>
       <h2>{singlev.phone}</h2>
    </div>
  )
}

export default Singlepage