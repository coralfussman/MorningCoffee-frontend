import React from 'react';
import {NavLink, Link} from 'react-router-dom'
//import logo from './components/Home/logo.svg';

const NavBar = () => {
  return(
    <header className="App-header">
    <nav className="nav">
        {/* <logo /> */}
        <NavLink className="navLink" to="/">Home</NavLink>
        
        <NavLink className="navLink" to="/login">Login</NavLink>
     
        <NavLink className="navLink" to="/register">Register</NavLink>
     
        <NavLink className="navLink" to="/dashboard">Dashboard</NavLink>
        
      
    </nav>
    </header>

  )
};

export default NavBar;