import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/global.css";


function Registor() {

  const [sv,sf]= useState({
    name:"",
    phone:"",
    email:""
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

const addnewdata = async(e)=>{
  e.preventDefault();
  const {name,phone,email} = sv;
  
  const res = await fetch("http://localhost:7000/reg",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      name,phone,email
    })
  })

  const data = await res.json();
  console.log(data);
  // window.location.reload();

}






  return (
    <div className='cus-login'>
        <section>
        <form>
            <h2>Registor page</h2>
            <div class="mb-3">
              <label class="form-label" >Full Name</label>
              <input type="text" class="form-control" value={sv.name} onChange={setdata} name="name"/>
            </div>
            <div class="mb-3">
              <label  class="form-label">Email id</label>
              <input type="email" class="form-control" value={sv.email} onChange={setdata} name="email" />
            </div>
            <div class="mb-3">
              <label  class="form-label">Phone no</label>
              <input type="text" class="form-control" value={sv.phone} onChange={setdata} name="phone" />
            </div>
            <div class="mb-3">
              <label  class="form-label">password</label>
              <input type="password" class="form-control" />
            </div>
            <div class="mb-3">
              <label  class="form-label">Confirm password</label>
              <input type="password" class="form-control" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" >condition</label>
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