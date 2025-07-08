"use client"

import React,{createContext, ReactNode, useMemo, useState} from 'react'

type addressType = {
    id:number,
    address:string
}

interface globalContextType {
    user:string,
    setUser:(user:string)=>void,
    data:addressType,
    setData:(data:addressType)=>void
}
export const GlobalContext = createContext<globalContextType|undefined>(undefined)

export const ContextProvider = ({children}:{children:ReactNode})=>{
    const [user,setUser] = useState<string>("Ankit")
    const [data,setData] = useState<addressType>({id:1, address:"Delhi"})

    
    const values = useMemo(
        ()=>({
            user, setUser, data,setData
        })
    , [user,data])
    return(
        <GlobalContext.Provider value={values}>
{children}
        </GlobalContext.Provider>
    )
}