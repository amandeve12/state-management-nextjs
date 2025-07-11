import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "./user"

export const useUser = ()=>{
    return useQuery({
        queryKey:['users'],
        queryFn:fetchUsers
    })
}