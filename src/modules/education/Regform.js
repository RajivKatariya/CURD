import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';


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




  const { register, handleSubmit} = useForm();
  const onSubmit = (data) =>
  { 
    console.log(data);
    if(data.pass===data.conpass)
    {
      alert("welcome");
    }
    else{
      alert("wrong password");
    }
  }

    return (
        <Fragment>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <ol>
                    <li><input type="text" {...register("name")}/></li>
                    <li><input type="number" {...register("age")}/></li>
                    <li><input type="date" {...register("dob")}/></li>
                    <li><input type="password" placeholder='password' {...register("pass")}/></li>
                    <li><input type="password" placeholder='confirm password' {...register("conpass")}/></li>
                    <li><input type="submit" value="submit"/></li>
                </ol>
            </form>




        </Fragment>

  )
}

export default Regform