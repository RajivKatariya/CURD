import React, {useContext, useEffect, useState } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/global.css";
import Navbar from '../../share/Navbar';
import Sidebar from '../../share/Sidebar';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContextData } from '../../contextapi/logincontextapi';

function Landing() {


//import context
const {contexv,contextf} = useContext(LoginContextData);
//  contextf(contexv);

  
const [datavariable,datafunction] =useState([]);

/*get all data function with api 2 */
  const mygetdata = async(e)=>{
    const res = await fetch("http://localhost:7000/getdata",{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    const data = await res.json();
    console.log(data);
    datafunction(data)
  };

  const his=useNavigate();
  const Userauth1 = async(e)=>{
    
    let token = localStorage.getItem("userdatatoken");
    const res = await fetch("http://localhost:7000/validuser",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization":token
      }
    });
    const data = await res.json();
    if(data.status === 401 || !data)
    {
      console.log("error page direction");
      his("*");
    }
    else{
      console.log("valid user"); 
      his("/landing");
      contextf(data.firsttimevalid.email);
    }
    
   
  }

  useEffect(()=>{
    Userauth1();
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
   
  };





  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-2 border">
            <Sidebar/>
        </div>
        <div className="col-10 border">
          <Navbar/>
      <div className='p-3'>
       
        <section className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
          <h1>welcom to page</h1> <NavLink className="btn btn-primary btn-sm" to="/reg">add new User</NavLink>
          </div>
          <div className='col-md-6 text-end'>
            <h3>{contexv}</h3>
          </div>
        </div>
        </section>
        <table className='table borderd'>
          <thead>
          <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>email</th>
            <th>action</th>
          </tr>
          </thead>
          <tbody>
            {datavariable.map((u)=>{
              // bind in html template 3 
              return(
                  <tr key={u._id}>
                    <td>{u._id}</td>
                    <td>{u.name}</td>
                    <td>{u.phone}</td>
                    <td>{u.email}</td>
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