import React, {createContext, useState } from "react";

export const LoginContextData = createContext("");

const LoginContext = ({children})=>{

    const [contexv,contextf]=useState("");
    return(
        <>
        <LoginContextData.Provider value={{contexv,contextf}}>
            {children}
        </LoginContextData.Provider>
        
        </>
    )

}

export default LoginContext