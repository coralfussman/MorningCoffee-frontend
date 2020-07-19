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
      user: {
        id: 0,
        username: "",
        dashboard: {
          widgetDash: [],
          userWidgets: []

        },
        userThemes: []
      },
      widgets: [],
      themes: [],
      token: ""

  
    }
  

//---------------FETCH REQUESTS----------------//
    
    //fetching nyt info
    // componentDidMount() {
    //   fetch("http://localhost:4000/users")
    //   .then(res => res.json())
    //   .then(users =>{
    //     this.setState({
    //       users: users
    //     })
    //   })

    //   fetch(API)
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState({
    //         results: data.results
    //       });
    //     });


        
    // }
    ///////////////////////////////////
    componentDidMount(){
      if(localStorage.token){

        fetch("http://localhost:4000/users/stay_logged_in",{
          headers: {
            "Authorization": localStorage.token
          }
        })
        .then(r => r.json())
        .then(this.handleResponse)
  
      }
        fetch("http://localhost:4000/themes")
        .then(r => r.json())
        .then((themes) => {
            this.setState({
                themes: themes
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
      
      
  
      handleLoginSubmit = (userInfo) => {
        fetch("http://localhost:4000/login", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(userInfo)
        })
          .then(r => r.json())
          .then(this.handleResponse)
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
          .then(this.handleResponse)
          
      }


  
      handleResponse = (resp) => {
  
        if(resp.user){
          localStorage.token = resp.token
          this.setState(resp, () => {
            this.props.history.push("/dashboard")
          })
        } else {
          alert(resp.error)
        }
  
      }

    ///////////////////////////////////


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
   
    // User functions

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




    



    //----------------RENDERING COMPONENTS-----------------//

    renderForm = (routerProps) => {
      if(routerProps.location.pathname === "/login"){
        return <Form
          formName="Login"
          user={this.state.user}
          handleSubmit={this.handleLoginSubmit}
         
        />
      } else if (routerProps.location.pathname === "/register") {
        return <Form
        formName="Register To Begin"
        
        handleSubmit={this.handleRegisterSubmit}
        />
      }
    }

    renderDashboard = (routerProps) => {
      if(this.state.token){
        return <Dashboard
        user={this.state.user}
        token={this.state.token}
        dashboard={this.state.dashboard}
        userWidgets={this.state.userWidgets}
        widgets={this.state.widgets}
        themes={this.state.themes}
        userThemes={this.state.userThemes}
        results={this.state.results}
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
      <img src={logo} className="widgetIcons" alt="logo" />
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;350;400;500&display=swap');
      </style>
      <NavBar/>  
      <header className="App-header">
      </header>
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

