import React from 'react';
import './logout.css';
import {Navigate} from "react-router-dom";

const Logout = () => {

    const [checklogin,setChecklogin]=useState(false);

    const handleLogout = (e) =>{
        e.preventDefault();
        setChecklogin(true);
    }

    return (
        <div>
              <div className='logout'>
       <h1> Welcome <span className='user_name'>{user.email}</span></h1>
       <h1>YOur Registration is Completed Successfully</h1>  
       <button className='logout_button' onClick={(e)=>handleLogout(e)}>Logout</button>   
        </div>

        {
            checklogin && <Navigate to="/" />
        }
        </div>
      
    )
}

export default Logout
