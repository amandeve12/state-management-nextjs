import { User } from "@/types/user"


export const fetchUsers = async():Promise<User[]>=>{
const res = await fetch('https://jsonplaceholder.typicode.com/users')
if(!res.ok) throw new Error("server error")
    return res.json()
}

