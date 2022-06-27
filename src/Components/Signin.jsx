import { useEffect } from "react"
import { useState } from "react"
import axios from "axios";

export default function Signin({lastUpdate, setLastUpdate}){
const [login, setLogin] = useState("")
const [password, setPassword] = useState("")
const [cpassword, setCPassword] = useState("")
const [users, setUsers] = useState([])
    

useEffect(() => {
    axios.get('http://localhost:3003/users')
        .then(res => {
            console.log(res.data);
            setUsers(res.data)

        }, )
},[lastUpdate])

const handleLogin = (e)=>{
    setLogin(e.target.value)
}

const handlePassword = (e)=>{
    setPassword(e.target.value)
}

const handleCPassword = (e)=>{
    setCPassword(e.target.value)
}

const handleCreate= ()=>{
    if (login.length===0 || password.length===0 || cpassword.length===0) {
        window.alert("You must enter login, password and password confirmation")
        return
    } 
    if(password !== cpassword){
        window.alert(" password and password confirmation are not the same, please check for errors")
        return 
    }

    let counter = 0;
    users.forEach(user=>{
            if(user.login===login){
                counter++
            }
        }
        )

        if(counter > 0){
            window.alert(" This login already taken")
            return 
        }    
    
    const Data ={
        login:login,
        password:password
    }

    axios.post('http://localhost:3003/createuser', Data)
    .then(res => {
      console.log(res);
      setLastUpdate(Date.now());
      setLogin("")
      setCPassword("")
      setPassword("")
    });
}



    return(
        <div className="search">
            <label htmlFor="login">Login</label>
            <input id="login" onChange={(e)=>handleLogin(e)} type="text" value={login} placeholder="Login" />
            <label htmlFor="password">Password</label>
            <input id="password" onChange={(e)=>handlePassword(e)} type="password" value={password} placeholder="password"/>
            <label htmlFor="confirmpassword">Confirm password</label>
            <input id="confirmpassword" onChange={(e)=>handleCPassword(e)} type="password" value={cpassword} placeholder="confirm password"/>
            <button onClick={handleCreate}>Create account</button>
        </div>
    )
}