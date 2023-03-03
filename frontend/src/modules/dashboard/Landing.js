import React, {useEffect, useState } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/global.css";
import Navbar from '../../share/Navbar';
import Sidebar from '../../share/Sidebar';
import { NavLink, useParams } from 'react-router-dom';

function Landing() {
const [datavariable,datafunction] =useState([]);

  const mygetdata = async(e)=>{
    const res = await fetch("http://localhost:7000/getdata",{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    const data = await res.json();
    console.log(data);
    datafunction(data)
  }

  useEffect(()=>{
    mygetdata();

  },[]);



  const deleterecordfunction = async(id)=>{
    const delrec = await fetch(`http://localhost:7000/deleterecord/${id}`,{
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
    })
    const deleterow = await delrec.json();
    console.log(deleterow);
    mygetdata();
   
  }



  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-2 border">
            <Sidebar/>
        </div>
        <div className="col-10 border">
          <Navbar/>
      <div className='p-3'>
        <h1>welcom to page</h1> <NavLink className="btn btn-primary btn-sm" to="/reg">add new User</NavLink>
        <table className='table borderd'>
          <thead>
          <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>action</th>
          </tr>
          </thead>
          <tbody>
            {datavariable.map((u)=>{
              return(
                  <tr key={u._id}>
                    <td>{u._id}</td>
                    <td>{u.name}</td>
                    <td>{u.phone}</td>
                    <td>
                      <button className='btn btn-sm btn-danger' onClick={()=>deleterecordfunction(u._id)}>Del</button>
                      <NavLink to={`/edit/${u._id}`} className="btn btn-primary btn-sm">edit</NavLink>
                      <NavLink to={`/view/${u._id}`} className="btn btn-primary btn-sm">view</NavLink>
                    </td>
                  </tr>
              )
            })}
          </tbody>
        </table>


      </div>
         
        </div>
    </div>
 

</div>
  )
}

export default Landing