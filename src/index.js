import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './components/NavBar'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
 
  <BrowserRouter>
     
      <App />
  </BrowserRouter>,
   document.getElementById('root'));
   ReactDOM.render(
 
    <BrowserRouter>
       
        <NavBar />
    </BrowserRouter>,
     document.getElementById('nav'));
  
  


