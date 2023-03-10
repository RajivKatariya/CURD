import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/global.css";


function Registor() {

  const [sv,sf]= useState({
    name:"",
    phone:"",
    email:"",
    pass:"",
    cpass:""
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
const addnewdata = async(e)=>{
  e.preventDefault();
  const {name,phone,email,pass,cpass} = sv;
  
  const res = await fetch("http://localhost:7000/reg",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      name,phone,email,pass,cpass
    })
  })

  const data = await res.json();
  console.log(data);
  // console.log(res.status);

  //field reset after submit
  if(res.status=== 201)
  {
    alert("user registor successfully");
    his("/");
    sf({...sv,name:"",phone:"",email:"",pass:"",cpass:""});
  }
  
  // window.location.reload();

}






  return (
    <div className='cus-login'>
        <section>
        <form>
            <h2>Registor page</h2>
            <div className="mb-3">
              <label className="form-label" >Full Name</label>
              <input type="text" className="form-control" value={sv.name} onChange={setdata} name="name"/>
            </div>
            <div className="mb-3">
              <label  className="form-label">Email id</label>
              <input type="email" className="form-control" value={sv.email} onChange={setdata} name="email" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Phone no</label>
              <input type="text" className="form-control" value={sv.phone} onChange={setdata} name="phone" />
            </div>
            <div className="mb-3">
              <label  className="form-label">password</label>
              <input type="password" className="form-control" value={sv.pass} onChange={setdata} name="pass" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Confirm password</label>
              <input type="password" className="form-control" value={sv.cpass} onChange={setdata} name="cpass" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" >condition</label>
            </div>
        <button type='submit' className="btn btn-primary" onClick={addnewdata}>submit</button>
            {/* <Link to="/" class="btn btn-primary" >Registor Now</Link> */}
            <Link to="/">Back to Login page</Link>
          </form>
        </section>
    </div>
    

  )
}

export default Registor