import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class Home extends React.Component {

    state={
        home: true
      }
    
      handleClick = (e) => {
          this.setState({  
            home: !this.state.home
          })
            
          
       }
    
       
       render() {

      
       

    return(
    <div className="homePg">
    < div className="home">
        
        
        <h1> <Link to="/register"> Morning Coffee</Link> </h1>
        <br/>
        <img src={logo} className="homeLogo" alt="logo" />
        <br/>
        <div onCLick={this.handleClick}> { 
        this.state.home
        ? <h2>by CORAL</h2>
        : <h4> <Link  to="/register"> Click to register </Link> </h4>
        } </div>
       
        
    </div>
    </div>
        )
}};

export default Home;