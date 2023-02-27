import React from 'react'
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/global.css";


function Login() {
  return (
    <div className='cus-login'>
        <section>
        <form>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input type="email" class="form-control" />
              {/* <div class="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div class="mb-3">
              <label  class="form-label">Password</label>
              <input type="password" class="form-control" />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" />
              <label class="form-check-label" >Check me out</label>
            </div>
            <Link to={'dashboard'} className="btn btn-success">submit</Link>
           
            <Link to="registor" className='btn btn-primary ms-3'>registor now</Link>
          </form>
        </section>
    </div>
    

  )
}

export default Login