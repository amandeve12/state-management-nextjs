"use client"

import { useUser } from "@/services/user/useUser"

const UserComponent=()=>{
    const {data,error,isLoading,isFetched} = useUser();

    console.log({data,isLoading,isFetched,error});
    // data[0].
    return(
        <>
        user component
        </>
    )
}

export default UserComponent