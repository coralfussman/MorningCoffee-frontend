import React from 'react';
import {NavLink, Link} from 'react-router-dom'
//import logo from './components/Home/logo.svg';

const NavBar = () => {
  return(
    <nav className="nav">
        {/* <logo /> */}
        <NavLink className="navLink" to="/">Home</NavLink>
        
        <NavLink className="navLink" to="/login">Login</NavLink>
     
        <NavLink className="navLink" to="/register">Register</NavLink>
     
        <NavLink className="navLink" to="/profile">Profile</NavLink>
        
      
    </nav>
  )
};

export default NavBar;