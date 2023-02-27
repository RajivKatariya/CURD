import React from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/global.css";


function Registor() {
  return (
    <div className='cus-login'>
        <section>
        <form>
            <h2>Registor page</h2>
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label  class="form-label">Email id</label>
              <input type="email" class="form-control" />
            </div>
            <div class="mb-3">
              <label  class="form-label">Phone no</label>
              <input type="text" class="form-control" />
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
        
            <Link to="/" class="btn btn-primary" >Registor Now</Link>
          </form>
        </section>
    </div>
    

  )
}

export default Registor