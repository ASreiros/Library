import axios from "axios";

export default function User({user, setLastUpdate}){

    const deleteHandler = ()=>{
       if( window.confirm("Are you sure you want to delete this user?")){
            axios.delete('http://localhost:3003/userdelete/' + user.id, )
            .then(res => {
            console.log(res);
            setLastUpdate(Date.now());
            });
        }
    }

    const promoteHandler = () =>{
        if( window.confirm("Are you sure you want to promote this user?")){
            axios.put('http://localhost:3003/promoteuser/'+ + user.id, )
            .then(res => {
            console.log(res);
            setLastUpdate(Date.now());
    });
        }
    }
    
    
    return(
        <div className="servicebook">
            <h3>{user.login}</h3>
            {user.admin?<p>Is Administrator</p>: <p>Is Client</p>}

            {user.admin? 
            <div className="btn-holder">
                
                <button onClick={deleteHandler} className="btn-del">Delete user</button>
            </div>
            : 
            <div className="btn-holder">
                <button onClick={promoteHandler} className="btn-promote">Promote user to admin</button>
                <button onClick={deleteHandler} className="btn-del">Delete user</button>
            </div>
            }

        </div>
    )
}