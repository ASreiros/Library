import { useEffect } from "react"
import { useState } from "react"
import User from "./User"
import axios from "axios";


export default function Admin({lastUpdate, setLastUpdate}){
    const [users, setUsers] = useState([])
    

    useEffect(() => {
        axios.get('http://localhost:3003/users')
            .then(res => {
                console.log(res.data);
                setUsers(res.data)

            }, )
    },[lastUpdate])

    return(
        <>
            <h2>Below you can delete and promote users</h2>
            {
                users.map((user,i)=><User key={i} user={user} setLastUpdate={setLastUpdate}></User>)
            }
    
        </>
    )
        
    
}