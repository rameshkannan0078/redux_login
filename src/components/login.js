import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import { signin,login} from '../features/userSlice';
import './login.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {Navigate} from "react-router-dom";

const Login = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [islogin,setlogin]=useState(true);
    const [issignin,setSign]=useState(false);
    const [errormsg,setError]=useState(false);
    const [errormsg2,setError2]=useState(false);
    const [loader,setloader]=useState(false);
    const [checklogin,setChecklogin]=useState(false);



    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setloader(true);
        setlogin(false);
        axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffLogin",
        {
            "email":email,
            "password":password
        }).then(function (response) {
            console.log(response.data);
            console.log(response.status);
            if(response.status === 200){
                dispatch(signin({
                    email:email,
                    password:password,
                    loggedcheck:true,
                }));
                setloader(false);
                setChecklogin(true);
            }
          }).catch(err=>{
             if(err.response.status === 400){
                 setloader(false);
                 setlogin(true);
                 setError(true);
             }
             if(err.response.status === 401){
                alert("Email or password is Incorrect");
                setloader(false);
                setlogin(true);
            }
          })

    }

    const handleSignup = (e) =>{
        e.preventDefault();

     
        axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffRegister",
        {
            "email":email,
            "password":password,
            "name":name,
            "mobile":phone
        }) .then(function (response) {
            console.log(response.data);
            console.log(response.status);
            if(response.status === 200){
                dispatch(login({
                    name:name,
                    email:email,
                    password:password,
                    phone:phone,
                    loggedIn:true
                }));
            }
          }).catch(err=>{
              if(err.response.status === 402){
                  setError2(true);
              }
              if(err.response.status === 400){
                  alert("Some of the fields are missing or incorrect")
              }
          })

    }

    const update = (e) =>{
        e.preventDefault();
        setlogin(false);
        setSign(true);
    }
    const setdata = (e) =>{
        e.preventDefault();
        setSign(false);
        setlogin(true);
    }

    return (
        <div>
            <div className='login'>
            {loader && <ReactLoading type="spinningBubbles" className="reactloading" color="black" height={200} width={200}/>}
            {
                islogin &&
                <form className='login_form1' onSubmit={(e)=>handleSubmit(e)}>
                <div className='login_signup1'>
                <button value={islogin} onClick={(e)=>setdata(e)}>Login</button>
                <button  value={issignin} onClick={(e)=>update(e)} className='Deselectd_color'>SignUp</button>
                </div>
                <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {errormsg && <div className='error_text'>Email/password is Missing</div>}
                <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' className='submit_button'>Submit</button>
            </form>
            }
            {
                checklogin && <Navigate to="/home"/>
            }
            
            {issignin &&
            <form className='login_form2' onSubmit={(e)=>handleSignup(e)}>
            <div className='login_signup2'>
            <button value={islogin} onClick={(e)=>setdata(e)} className='Deselectd_color'>Login</button>
            <button  value={issignin} onClick={(e)=>update(e)}>SignUp</button>
            </div>
           
            <input type="name" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {errormsg2 && <div className='error_text'>Email id Already Existed</div>}
            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="phone" placeholder='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
           
            <button type='submit' className='submit_button'>Submit</button>
         
        </form>
            }
          
            
        </div>
        </div>
        
    )
}

export default Login;
