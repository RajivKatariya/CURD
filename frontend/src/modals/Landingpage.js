import React, { useEffect,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { mydata } from './Myfakedata';


function Landingpage() {

  
  const [datavariable,datafunction] =useState([]);
    const mygetdata = async(e)=>{
      const res = await fetch("http://localhost:8000/getdata",{
        method:"GET",
        headers:{"Content-Type":"application/json"}
      })
      const data = await res.json();
      console.log(data);
      datafunction(data)
    };

    useEffect(()=>{
      mygetdata();
    },[]);


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2 g-0'>
          <section className='border p-2'>
            <Sidebar/>
          </section>
        </div>
        <div className='col-md-10 g-0 bg-light'>
          <section className='border p-2'>
            <nav className='row row1'>
              <div className='col-12'>
              <Navbar/>
              </div>
            </nav>
           
            <table className='table mt-5 table-responsive'>
              <thead>
                <tr>
                <th>sno</th>
                <th>Full Name</th>
                <th>Email id</th>
                <th>Phone No</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {datavariable.map((a)=>{
                return(
                  <tr key={a._id}>
                  <td>{a._id}</td>
                  <td>{a.fullname}</td>
                  <td>{a.email}</td>
                  <td>{a.phone}</td>
                  <td>
                    <button type='button' className='btn btn-warning btn-sm me-2'>Edit</button>
                    <button type='button' className='btn btn-danger btn-sm me-2'>Del</button>
                    <button type='button' className='btn btn-info btn-sm'>view</button>
                  </td>
                </tr>
                )
              })}
              </tbody>
             
            </table>

          </section>
        </div>
      </div>

    </div>
  )
}

export default Landingpage