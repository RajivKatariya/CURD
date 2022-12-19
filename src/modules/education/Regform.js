import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'

function Regform() {
const [sv,sf] =useState('');
  
  const name =(a)=>{
    sf(a.target.value);
    if(sv.length>=5)
    {
        alert("you cant write greater then 5");
    }
    console.log(sv);
  }
    return (
        <Fragment>
            <form>
                <ol>
                    <li><input type="text" value={sv} placeholder='entre name' onChange={name} /></li>
                    <li><input type="number"/></li>
                    <li><input type="date"/></li>
                    <li><input type="password" placeholder='password'/></li>
                    <li><input type="password" placeholder='confirm password'/></li>
                    <li><input type="button" value="submit"/></li>
                </ol>
            </form>



        </Fragment>

  )
}

export default Regform