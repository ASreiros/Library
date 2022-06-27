export default function Book({book}){

    return(
        <div className="servicebook">
            <h3>{book.name}</h3>
            <p>{book.language}</p>
            <p>{book.category}</p>
            {book.reserved ? <p>Book is reserved</p> : <p>Book is availible</p>}

        </div>
    )
}