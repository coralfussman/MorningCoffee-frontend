import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import NavBar from './components/NavBar'
import About from './components/About'
import Dashboard from './DashboardComponents/Dashboard'
import logo from './logo.svg';


import {withRouter} from 'react-router-dom'
//import './App.css';
//import Draggable from 'react-draggable';




const API = `https://api.nytimes.com/svc/news/v3/content/nyt/world.json?limit=24&api-key=Vbo7rX2HeUg4VgvGnKUC0AYflLY5sSBW`



  class App extends React.Component {
    state = {
      //results for nyt
      results: [],
      users: [],
      currentUser: [],
      dashboard: "",
      widgets: [],
      theme: []

  
    };
  

//---------------FETCH REQUESTS----------------//
    
    //fetching nyt info
    componentDidMount() {
      fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(users =>{
        this.setState({
          users: users
        })
      })

      fetch(API)
        .then(res => res.json())
        .then(data => {
          this.setState({
            results: data.results
          });
        });


        
    }


    handleRegisterSubmit = (userInfo) => {
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(this.pushUserDash)
        
    }

    // pushUserDash = (resp) => {
    //   if(resp.user){
    //     this.setState(resp, () => {
    //       this.props.history.push("/dashboard")
    //     })
    //   } else {
    //     alert(resp.error)
    //   }
    // }

    //----------------SETTING STATE FUNCTIONS-----------------//
    // fetch(`http://localhost:4000/users/10`)
    // .then(r => r.json())
    // .then((user) => {
    //     this.setState({
    //         currentUser: user
    //     })
    // })

    // User functions

    currentUser = (user) => {
      console.log(user, "user")
      this.setState({
        currentUser: user
      })
    }

    clearUser = (e) => {
      // window.location.reload(false)
      this.setState({
        currentUser: undefined
      })
    }


    //widget functions
    // removeWidget = (deletedWidge) => {
     
    //   let copyOfWidge = this.state. filter((widgePojo) => {
    //     return widgePojo.id !== deletedWidge
    //   })
    //   this.setState({
    //    widge: { widge: copyOfWidge}
    //   })
    // }

     //dash functions




    // -----might not need if user sign in is fake, set user to state, but then how to resign in?

    handleLoginSubmit = (userInfo) => {
      fetch("http://localhost:4000/users/10", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(this.pushUserDash)
    }


    //----------------RENDERING COMPONENTS-----------------//

    renderForm = (routerProps) => {
      if(routerProps.location.pathname === "/login"){
        return <Form
          formName="Login"
          users={this.state.users}
          handleSubmit={this.handleLoginSubmit}
          currentUser={this.currentUser}
        />
      } else if (routerProps.location.pathname === "/register") {
        return <Form
        formName="Register To Begin"
        
        handleSubmit={this.handleRegisterSubmit}
        />
      }
    }

    renderDashboard = (routerProps) => {
      if(this.state.user){
        return <Dashboard
        user={this.state.user}
          deleteDash={this.deleteDash}
           updateDash={this.updateDash} />
         
      } else {
        this.props.history.push("/login")
      }
    }

    renderAbout = (routerProps) => {
      return <About />
    }

    
    render() {
      return (
        <div className="App">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;350;400;500&display=swap');
      </style>
      <img src={logo} className="widgetIcons" alt="logo" />
      <NavBar/>  
      <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/login" render={this.renderForm}/>
      <Route path="/register" render={this.renderForm}/>
      <Route path="/dashboard" render={this.renderDashboard} />
      <Route path="/about" render={this.renderAbout} />
    
      </Switch>
    </div>
    );
  }
}

//export default App;

let RouterComponent = withRouter(App)
export default RouterComponent

