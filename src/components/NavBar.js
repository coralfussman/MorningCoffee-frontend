import React from 'react';
import {NavLink} from 'react-router-dom'
//import logo from './components/Home/logo.svg';

const NavBar = () => {
  return(
   
    <nav >
        {/* <logo /> */}
        <NavLink className="navLink" to="/">Home</NavLink>
        
        <NavLink className="navLink" to="/login">Login</NavLink>
     
        <NavLink className="navLink" to="/register">Register</NavLink>
     
        <NavLink className="navLink" to="/dashboard">Dashboard</NavLink>

        <NavLink className="navLink" to="/wellness">Wellness</NavLink>
      
        <NavLink className="navLink" to="/about">About</NavLink>

    </nav>
 

  )
};

export default NavBar;