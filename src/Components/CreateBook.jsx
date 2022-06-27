import { useEffect } from "react"
import { useState } from "react"
import axios from "axios";



export default function CreateBook({setLastUpdate}){
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [language, setLanguage] = useState("")

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleCategory = (e)=>{
        setCategory(e.target.value)
    }

    const handleLanguage = (e)=>{
        setLanguage(e.target.value)
    }

    const handleCreate= ()=>{
        if (name.length===0 || category.length===0 || language.length===0) {
            window.alert("You must enter name, category and languages")
            return
        } 
    
       
        
        const Data ={
            name:name,
            category:category,
            language:language
        }
    
        axios.post('http://localhost:3003/createbook', Data)
        .then(res => {
          console.log(res);
          setLastUpdate(Date.now());
          setName("")
          setCategory("")
          setLanguage("")
        });
    }

    return(
        <div className="search">
            <h3>Create new book</h3>
        <label htmlFor="name">Name of the book</label>
        <input id="name" onChange={(e)=>handleName(e)} type="text" value={name} placeholder="Name of the book" />
        <label htmlFor="category">Category</label>
        <input id="category" onChange={(e)=>handleCategory(e)} type="text" value={category} placeholder="categories"/>
        <label htmlFor="language">Enter availible languages</label>
        <input id="language" onChange={(e)=>handleLanguage(e)} type="text" value={language} placeholder="availible languages"/>
        <button onClick={handleCreate}>Add book</button>
    </div>
    )
}