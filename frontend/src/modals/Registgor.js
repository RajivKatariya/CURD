import React from 'react'

function Registgor() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" />
                <div class="form-text"> filed required</div>
            </div>
            <div className="col-12">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" />
                <div class="form-text"> filed required</div>
                
            </div>
        </div>
    </div>
  )
}

export default Registgor