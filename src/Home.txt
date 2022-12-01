import React from 'react'

function Home() {

    const a=100;

const myfun = ()=>
{
    alert("welcome react js");
}

const xyz =(e)=>
{
    alert(e.target.value);
    console.log(e);
}

  return (
    <div>
        <h1 style={{color:'red',fontSize:`${a}px`}}>This is home page</h1>
        <button type='button' onClick={myfun}>submit</button>
        <input type="button" value="submit" onClick={xyz} />
    </div>
  )
}

export default Home