import { useState } from "react"

export default function Search({handleSearch}){
const [name, setName] = useState("")
const [category, setCategory] = useState("")
const [language, setLanguage] = useState("")

const nameHandler=(e)=>{
    setName(e.target.value)
    console.log(e.target.value);
}

const categoryHandler=(e)=>{
    setCategory(e.target.value)
    console.log(e.target.value);
}

const languageHandler=(e)=>{
    setLanguage(e.target.value)
    console.log(e.target.value);
}

const clickHandler = ()=>{
    const data = {
        name:name,
        category:category,
        language:language
    }

    handleSearch(data)
}

    return(
        <div className="search">
            <p>Search your favorite book here</p>
            <label htmlFor="name">Name of the book</label>
            <input id="name" type="text" value={name} onChange={(e)=>nameHandler(e)} />
            <label htmlFor="category">Category</label>
            <input id="category" type="text" value={category} onChange={(e)=>categoryHandler(e)}/>
            <label htmlFor="language">Language</label>
            <input id="language" type="text" value={language} onChange={(e)=>languageHandler(e)}/>
            <button onClick={clickHandler}>Search</button>
        </div>
    )
}