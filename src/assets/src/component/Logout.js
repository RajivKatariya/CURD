import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function Logout() {
  const {Logout, isAuthenticated} =useAuth0();
const Abc = ()=>{
  localStorage.clear();
  Logout();
}
  
    return (
        isAuthenticated && (
            <button type="button" onClick={Abc}>
              logout
            </button>
        )
  )
}

export default Logout