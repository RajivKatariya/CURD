import React, { useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/global.css";
import Navbar from '../../share/Navbar';
import Sidebar from '../../share/Sidebar';

function Landing() {

  // const mygetdata = async(e)=>{
  //   e.preventDefault();
  //   const res = await fetch("http://localhost:7000/getdata",{
  //     method:"GET",
  //   })
  
  //   const data = await res.json();
  //   console.log(data);
  // }
  
  useEffect(() => {
    fetch(`http://localhost:7000/getdata`)
     .then((response) => console.log(response.json()));
   }, []);



  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-2 border">
            <Sidebar/>
        </div>
        <div className="col-10 border">
          <Navbar/>
      <div className='p-3'>
        <h1>welcom to page</h1>



      </div>
         
        </div>
    </div>
 

</div>
  )
}

export default Landing