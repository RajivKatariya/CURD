import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/global.css";

function Sidebar() {
  return (
    <Fragment>

<div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Home
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
     <ul className='list-group list-group-flush'>
      <li className='list-group-item'><Link to="">Home</Link></li>
      <li className='list-group-item'><Link to="">Home</Link></li>
     </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      About
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      <ul className='list-group list-group-flush'>
      <li className='list-group-item'><Link to="">Home</Link></li>
      <li className='list-group-item'><Link to="">Home</Link></li>
     </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Contact us
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      <ul className='list-group list-group-flush'>
      <li className='list-group-item'><Link to="">Home</Link></li>
      <li className='list-group-item'><Link to="">Home</Link></li>
     </ul>
      </div>
    </div>
  </div>
</div>



    </Fragment>
  )
}

export default Sidebar