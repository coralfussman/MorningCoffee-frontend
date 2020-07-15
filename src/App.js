import React from 'react';
import {Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import weather from './weather.svg';
import currency from './currency.svg';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import NavBar from './components/NavBar'
import About from './components/About'
import NewsContainer from './DasboardComponents/NewsContainer'


import {withRouter} from 'react-router-dom'
//import './App.css';
import Draggable from 'react-draggable';

import NewsContainer from './DashboardComponents/NewsContainer';



const API = 'https://api.nytimes.com/svc/news/v3/content/nyt/world.json?limit=24&api-key=Vbo7rX2HeUg4VgvGnKUC0AYflLY5sSBW'



  class App extends React.Component {
    state = {
      results: []
  
    };
  
    componentDidMount() {
      fetch(API)
        .then(res => res.json())
        .then(data => {
          this.setState({
            results: data.results
          });
        });
    }


    
    render() {
      return (
        <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;350;400;500&display=swap');
      </style>
      <NavBar/>  
      <img src={logo} className="App-logo" alt="logo" />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" render={this.renderForm}/>
      <Route path="/search" render={this.renderSearch} />
      <Route path="/tripform" render={this.renderTripForm} />
      <Route path="/register" render={this.renderForm}/>
      <Route path="/profile" render={this.renderProfile} />
      <Route path="/about" render={this.renderAbout} />
    
      </Switch>
    </div>
    );
  }
}

//export default App;

let RouterComponent = withRouter(App)
export default RouterComponent

