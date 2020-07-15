import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ReactLogo} from '../logo.svg';

const Home = () => (
 
    <div className="homeBttn">
        
        <h4> <Link className="homelink1" to="/register">    <br/>Click to Get Started </Link></h4>
        <h4> <Link className="homelink2" to="/register">  <br/><br/><br/><br/>Jetset </Link> </h4>
       <h4> <Link className="homelink3" to="/register">    <br/>Trip Planning made simple </Link></h4>
       
        <img className="homebg" src="https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/11/First-time-in-Tokyo.jpg" />
    </div>
);

export default Home;