import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
const Home = () => (
 
    <div className="homeBttn">
        
       <img src={logo} className="homeLogo" alt="logo" />
        <h4> <Link to="/register">  <br/>Morning Coffee</Link> </h4>
       <h4> <Link  to="/register">    <br/>Click to register </Link></h4>
    
    </div>
);

export default Home;