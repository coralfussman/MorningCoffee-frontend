import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components';
import { createGlobalStyle} from "styled-components"
import Home from './components/Home'
import Form from './components/Form'
import NavBar from './components/NavBar'
import About from './components/About'
import Wellness from './components/Wellness'
import Dashboard from './DashboardComponents/Dashboard'
import GlobalStyle from './DashboardComponents/GlobalStyle'

import logo from './logo.svg';

import  {themes} from "./DashboardComponents/Themes";



import {withRouter} from 'react-router-dom'



const API = `https://api.nytimes.com/svc/news/v3/content/nyt/world.json?limit=24&api-key=Vbo7rX2HeUg4VgvGnKUC0AYflLY5sSBW`



  class App extends React.Component {
    state = {
      //results is for nyt
      results: [],
      user: {
        id: 0,
        username: "",
        name: "",
        dashboards: [
          {
          // widget_dashes: [],
          widgets: []
        }

      ],
        themes: [
          {
            id: 1,
            name: ""
          }
         
        ]
      },
      widgets: [],
      themeNames: [],
      token: "",
      searchTerm: "",
      filteredArray: [],
      // userWidgets: []

  
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
          .then(r => this.handleResponse(r))
          
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
   
    // ---------User functions

    clearUser = (e) => {
      // window.location.reload(false)
      this.setState({
        user: {
          id: 0,
          themes: [
            {
              id: 1,
              name: "coffee"
            }
           
          ]
        }
      })
      this.props.history.push("/")
    }


    //-----------widget functions

    addOneWidget = (newlyCreatedWidgetDash) => {
      console.log(newlyCreatedWidgetDash)
      let copyOfWidgets = [...this.state.user.dashboards[0].widgets, newlyCreatedWidgetDash]
      let copyOfWidgetDash = this.state.user.dashboards[0].widget_dashes
      this.setState(({user}) => ({
        user: {
          ...user,
          dashboards: [{ id: "1", widget_dashes: copyOfWidgetDash, widgets: copyOfWidgets}]
        }
        
      }))
    
      console.log(copyOfWidgets, "copy of widge")
    }


    

    deleteWidget = (deletedWidgetDash) => {
     
      console.log(deletedWidgetDash, "deleted widge dash")
      let copyOfWidgets = this.state.user.dashboards[0].widgets.filter((widgetPojo) => {
        return widgetPojo.widget_dash_id !== deletedWidgetDash
        // return widgetPojo ? widgetPojo.widget_dash_id !== deletedWidgetDash : this.state.user.dashboards[0].widgets
      })
      let copyOfWidgetDash = this.state.user.dashboards[0].widget_dashes
      
      this.setState(({user}) => ({
        user: {
          ...user,
          dashboards: [{id: "1", widget_dashes: copyOfWidgetDash, widgets: copyOfWidgets}]
        }
      }))
      console.log(copyOfWidgets, "copy of widge")
    }




     //------dash functions

     changeSearchTerm = (termFromChild) => {
      this.setState({
        searchTerm: termFromChild
      })
    }

    matchedSearch = () => {
      //console.log(this.state.searchTerm, "This is it")
      let matchedArray = this.state.results.filter((newsPojo) => {
      
        return (
          newsPojo.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        
          )
      })

            return matchedArray
         
    }
  
    //theme functions
    updateTheme = (updatedPojo) => {
      console.log(updatedPojo)
    //   let copyOfObject = this.state.user.themes[0].name.map((themePojo) => {
    //     if (themePojo.id === updatedPojo.id) {
    //         return updatedPojo
    //     } else {
    //         return themePojo
    //     }
    // })
    this.setState({
        user: updatedPojo
    })
    }

  
  

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
        //widgetDash={this.state.user.dashboards[0].widget_dashes}
        // widgets={this.state.widgets}
        addOneWidget={this.addOneWidget}
        deleteWidget={this.deleteWidget}

        themeNames={this.state.themeNames}
        userThemes={this.state.user.themes}
        updateTheme={this.updateTheme}

        searchTerm={this.state.searchTerm}
        changeSearchTerm={this.changeSearchTerm}
        results={this.matchedSearch}
        updateDash={this.updateDash} />
         
      } else {
        this.props.history.push("/login")
      }
    }

    renderAbout = (routerProps) => {
      return <About />
    }

    renderWellness = (routerProps) => {
      return <Wellness />
    }

    
    

    
    render() {
      const mode = this.state.user.themes[0].name
      const style = themes[mode]
    //  console.log(this.state.user.themes[0])
    console.log(this.state.user)
    //  console.log(this.state.themeNames)
    //console.log(this.state.user.dashboards[0].id)
    //console.log(this.state.user.dashboards[0].widgets)
    // console.log(style)
    // console.log(themes)
      return (
        // <Theme>
        <ThemeProvider theme={{themes: style}} > 
          <GlobalStyle  />
            <div >
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;350;400;500&display=swap');
              </style>
            
              <NavBar/>  
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" render={this.renderForm}/>
                <Route path="/register" render={this.renderForm}/>
                <Route path="/dashboard" render={this.renderDashboard} />
                <Route path="/wellness" render={this.renderWellness} />
                <Route path="/about" render={this.renderAbout} />
              </Switch>
            </div>
        </ThemeProvider>
        // </Theme>
    );
  }
}

//export default App;

let RouterComponent = withRouter(App)
export default RouterComponent

