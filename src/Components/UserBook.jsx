import axios from "axios";

export default function UserBook({book, setLastUpdate, lastUpdate}){

    const ReserveHandler = ()=>{
        axios.put('http://localhost:3003/reservebook/'+ book.id)
        .then(res => {
          console.log(res);
          setLastUpdate(Date.now());
        });
    
         }

    const ReturnHandler = ()=>{
            axios.put('http://localhost:3003/returnbook/'+ book.id)
            .then(res => {
              console.log(res);
              setLastUpdate(Date.now());
            });
        
    }     
    

    return(
        <div className="adminservicebook">
            <h3>{book.name}</h3>
            <p>{book.language}</p>
            <p>{book.category}</p>
            {book.reserved ? <><p>Book is reserved</p> <button onClick={ReturnHandler}>Return book</button> </> : <><p>Book is availible</p><button onClick={ReserveHandler}>Reserve book</button></>}
            

        </div>
    )
}