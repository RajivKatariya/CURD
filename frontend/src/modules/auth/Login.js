import React from 'react'
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/global.css";


function Login() {
  return (
    <div className='cus-login'>
        <section>
        <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />
              {/* <div className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
              <label  className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" >Check me out</label>
            </div>
            <Link to="landing" className="btn btn-success">submit</Link>
           
            <Link to="reg" className='btn btn-primary ms-3'>registor now</Link>
          </form>
        </section>
    </div>
    

  )
}

export default Login