import { useState, useEffect } from "react";
import axios from "axios";
import AdminBook from "./AdminBook";
import Search from "./Search";
import CreateBook from "./CreateBook";

export default function Adminbooks({lastUpdate, setLastUpdate}){
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3003/home')
            .then(res => {
                console.log(res.data);
                setBooks(res.data)

            }, )
    },[lastUpdate])

    const handleSearch=(data)=>{
        let temp1 = [...books]
        console.log(temp1);
        let temp2 = []

        temp1.forEach(b=>{
            if((b.name.includes(data.name))&&(b.category.includes(data.category))&&(b.language.includes(data.language))){
                temp2.push(b)
            }
        })

        console.log(temp2);
        setBooks([...temp2])
    }


    return(
        <section>
            <h2>Here you can administrate books</h2>
            <Search handleSearch={handleSearch}></Search>
            <CreateBook lastUpdate={lastUpdate} setLastUpdate={setLastUpdate}></CreateBook>
            <h3>Below you can find list of our books and their availability</h3>
            <div className="adminservicetitle">
                <p>Book name</p>
                <p>Book language</p>
                <p>Book category</p>
                <p>Book availability</p>
                <p>Book control</p>
            </div>
            {
                books.map((book,i)=>{
                    return <AdminBook key={i} book={book} lastUpdate={lastUpdate} setLastUpdate={setLastUpdate}></AdminBook>
                
                })
            }


        </section>
    )
}