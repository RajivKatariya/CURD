import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/global.css";


function Login() {
  const [sv,sf]= useState({
    email:"",
    pass:"",
  });

  const setdata = (e)=>{
    console.log(e.target.value);
    const {name,value} = e.target;
    sf((preval)=>{
      return{
        ...preval,
        [name]:value
      }
    })
  }

  const his = useNavigate();
const loginuser = async(e)=>{
  e.preventDefault();
  const {email,pass} = sv;
  
  const mydata = await fetch("http://localhost:7000/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      email,pass
    })
  })

  const res = await mydata.json();
  console.log(res);
  if(res.status === 201)
  {
    localStorage.setItem("userdatatoken",res.result.token);
      his("/landing");
    sf({...sv,email:"",pass:""});
    
  }

}






  return (
    <div className='cus-login'>
        <section>
        <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" value={sv.email} onChange={setdata} name="email" />
              {/* <div className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
              <label  className="form-label">Password</label>
              <input type="password" className="form-control" value={sv.pass} onChange={setdata} name="pass" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" >Check me out</label>
            </div>
            {/* <Link to="landing" className="btn btn-success">submit</Link> */}
           <button className='btn btn-primary btn-sm' type='button' onClick={loginuser}>login</button>
            <Link to="reg" className='btn btn-primary ms-3'>registor now</Link>
          </form>
        </section>
    </div>
    

  )
}

export default Login