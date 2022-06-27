import axios from "axios";

export default function AdminBook({book, setLastUpdate, lastUpdate}){

    const deleteHandler = ()=>{
        if( window.confirm("Are you sure you want to delete this book?")){
             axios.delete('http://localhost:3003/bookdelete/' + book.id, )
             .then(res => {
             console.log(res);
             setLastUpdate(Date.now());
             });
         }
     }

    return(
        <div className="adminservicebook">
            <h3>{book.name}</h3>
            <p>{book.language}</p>
            <p>{book.category}</p>
            {book.reserved ? <p>Book is reserved</p> : <p>Book is availible</p>}
            <button onClick={deleteHandler}>Delete book</button>

        </div>
    )
}