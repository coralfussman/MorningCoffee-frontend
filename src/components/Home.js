import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
const Home = () => (
 
    <div className="homePg">
        
       <img src={logo} className="homeLogo" alt="logo" />
      <h4> <Link to="/register"> Morning Coffee</Link> </h4><br/>
       <br/><h4> <Link  to="/register"> Click to register </Link></h4>
    
    </div>
);

export default Home;