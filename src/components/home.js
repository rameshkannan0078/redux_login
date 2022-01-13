import React,{useState} from 'react'
import nature from "../app/nature.jpg";
import './home.css';
import {Navigate} from "react-router-dom";

const Home = ()=>{

    const [checklogin,setChecklogin]=useState(false);

    

const handleLogout = (e) =>{
   
    setChecklogin(true);
}

    return (
        <div>
              <div className='box'>
             <div className='log__out'>
            <h1>Logged In Successfully</h1>
            <img src={nature} alt="nature"/>
           <button className='logout_button' onClick={(e)=>handleLogout(e)}>Logout</button>  
        </div>

        </div>

        {
            checklogin && <Navigate to="/" />
        }

        </div>

      
       
    )
}

export default Home

