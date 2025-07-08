"use client"

import { GlobalContext } from "@/context/globalContext"
import { useContext } from "react"



const Hero =()=>{
const {user,setUser,data} = useContext(GlobalContext)
    return(
        <>
        {user}
        {data.address}
        <button onClick={()=>setUser("Aman")}>click</button>
        </>
    )
}

export default Hero