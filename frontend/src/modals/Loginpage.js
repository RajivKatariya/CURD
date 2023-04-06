import React from 'react';
import { Link } from 'react-router-dom';

function Loginpage() {
  return (
    <div className="container-fluid bg-light border p-5 shadow" style={{width:'500px'}} >
        <div className='row'>
          <div className='col-12'>
            <h1>Login Page</h1>
          </div>
        </div>
        <div className="row">
            <div className="col-12 mt-2">
                <label className="form-label">Email id</label>
                <input type="email" className="form-control" />
            </div>
           
            <div className="col-12 mt-2">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
            </div>
            <div className="col-12 mt-2 text-center">
                <Link className='btn btn-success ms-3' to="landing">Login</Link>
                <Link className='btn btn-warning ms-3' to="reg">Registor Now</Link>
            </div>
        </div>
    </div>
  )
}

export default Loginpage