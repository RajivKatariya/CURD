import React from "react";
import Myhome from "./Home";

function Mybout()
{
const a="50";
const b =6000;
const c =<h2> this is heading two</h2>
const d = ()=>
{
    alert("welcome");
}
const f = <Myhome />




    return(
        <div>
        <h>welcome {a} {b} {c}</h>
        <button type="button" onClick={d}>submit</button>
        {f}
        </div>
    )

}

export default Mybout
