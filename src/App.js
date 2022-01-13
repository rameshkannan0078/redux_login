import React from 'react';
import Login from './components/login';
import "./App.css"
import Logout from './components/logout';
import Home from './components/home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


const App = () => {
  
  const page=useSelector(selectUser);
  console.log(page);

  return (
    <div>
 
    {
      page ? <Logout/> :
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/home" element={<Home/>} />        
      </Routes>
    </BrowserRouter>
    }
    </div>
  )
}

export default App
