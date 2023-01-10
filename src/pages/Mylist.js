import React from 'react'
import '../style.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function Mylist1() {

    const [sv,sf]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((abc)=>{
        console.log(abc.data);
        sf(abc.data);
        });
       
             
    })



  return (
    <> 
    <h1> this my data list</h1>
    {/* {sv.map((e)=>{
        return(
            <h1>{e.id}</h1>
        )
    })} */}
        <table border='1' className='abcdf'>
            <thead>
            <tr>
                <th>id</th>
                <th>user id</th>
                <th>title</th>
                <th>body text</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {sv.map((e)=>{
        return(
                <tr>
                    <td>{e.id}</td>
                    <td>{e.userId}</td>
                    <td>{e.title}</td>
                    <td>{e.body}</td>
                    <td><button className='btn btn-primary btn-sm'>remove</button></td>
                </tr>
                   )
                })}
            </tbody>
            
        </table>

    </>

  )
}

export default Mylist1