import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';


function Landingpage() {
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
            <nav className='row'>
              <div className='col-12'>
              <Navbar/>
              </div>
            </nav>
            <div className='row mt-2'>
              <div className='col-md-3'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
              </div>
              <div className='col-md-3'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
              </div>
              <div className='col-md-3'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
              </div>
              <div className='col-md-3'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
              </div>
            </div>


          </section>
        </div>
      </div>

    </div>
  )
}

export default Landingpage