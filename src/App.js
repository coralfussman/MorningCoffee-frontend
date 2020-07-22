import React from 'react';
import {Switch, Route} from 'react-router-dom'
// import ThemeProvider from 'react-theme-provider';
// import { createGlobalStyle} from "styled-components"
import Home from './components/Home'
import Form from './components/Form'
import NavBar from './components/NavBar'
import About from './components/About'
import Dashboard from './DashboardComponents/Dashboard'



// import { themes } from "./DashboardComponents/Themes";




import {withRouter} from 'react-router-dom'
//import './App.css';
//import Draggable from 'react-draggable';




const API = `https://api.nytimes.com/svc/news/v3/content/nyt/world.json?limit=24&api-key=Vbo7rX2HeUg4VgvGnKUC0AYflLY5sSBW`



  class App extends React.Component {
    state = {
      //results is for nyt
      results: [],
      user: {
        id: 0,
        username: "",
        dashboards: [
          {
          widget_dashes: [],
          widgets: []
        }

      ],
        themes: [
          {
            id: 0,
            name: ""
          }
         
        ]
      },
      widgets: [],
      themeNames: [],
      token: ""

  
    }
  

//---------------FETCH REQUESTS----------------//
  
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
        .then((themeNames) => {
            this.setState({
              themeNames: themeNames
            })
        })

        fetch("http://localhost:4000/widgets")
        .then(r => r.json())
        .then((widgets) => {
            this.setState({
                widgets: widgets
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
          .then(console.log)
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


    //----------------SETTING STATE FUNCTIONS-----------------//
   
    // User functions

    clearUser = (e) => {
      // window.location.reload(false)
      this.setState({
        user: undefined
      })
      this.props.history.push("/home")
    }


    //widget functions

    addOneWidget = (newlyCreatedWidgetDash) => {
      console.log(newlyCreatedWidgetDash)
      // let copyOfWidgetDash = [...this.state.user.dashboards[0].widget_dashes, newlyCreatedWidgetDash]
      // let copyOfUser = {
      //   ...this.state.user.dashboards[0], 
      //     widget_dashes: copyOfWidgetDash
      // }
      // this.setState({
      //   widget_dashes: copyOfUser
      // })
    }


    deleteWidget = (deletedWidgetDash) => {
     
      let copyOfWidget = this.state.user.dashboards[0].widgets.widget_dash_id.filter((widgetPojo) => {
        return widgetPojo.widget_dash_id !== deletedWidgetDash
      })
      console.log(copyOfWidget)
      this.setState({
       user: { dashboards:[{
                 widgets: copyOfWidget}]}
      })
    }

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
        clearUser={this.clearUser}
        dashboardID={this.state.user.dashboards[0].id}
        userWidgets={this.state.user.dashboards[0].widgets}
        widgetDash={this.state.user.dashboards[0].widget_dashes}
        widgets={this.state.widgets}
        themeNames={this.state.themeNames}
        userThemes={this.state.user.themes}
        results={this.state.results}
        addOneWidget={this.addOneWidget}
        deleteWidget={this.deleteWidget}
          updateDash={this.updateDash} />
         
      } else {
        this.props.history.push("/login")
      }
    }

    renderAbout = (routerProps) => {
      return <About />
    }

    
    render() {
      console.log(this.state.user)
     //console.log(this.state.user.dashboards[0].id)
    //console.log(this.state.user.dashboards[0].widgets)
      return (
        // <ThemeProvider themes={this.state.themes}>
        <div className="App">
      {/* <img src={logo} className="widgetIcons" alt="logo" /> */}
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;350;400;500&display=swap');
      </style>
      <NavBar/>  
      {/* <header className="App-header">
      </header> */}
      <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/login" render={this.renderForm}/>
      <Route path="/register" render={this.renderForm}/>
      <Route path="/dashboard" render={this.renderDashboard} />
      <Route path="/about" render={this.renderAbout} />
    
      </Switch>
    </div>
    // </ThemeProvider>
    );
  }
}

//export default App;

let RouterComponent = withRouter(App)
export default RouterComponent

