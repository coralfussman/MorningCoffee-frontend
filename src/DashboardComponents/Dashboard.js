import React, { Component } from 'react'
//import {WidgetDash, NewsContainer} from './DashboardComponents';
import NewsContainer from './NewsContainer';
import WidgetDash from './WidgetDash';
import { Container, Draggable } from "react-smooth-dnd";
//import {weather, quotes, currency, calendar} from './DashboardComponents'
import {Button, SVGPanel, MediaPanel, InvertedFont, ThemePanel} from './Themes';

import weather from '../weather.svg';
import currency from '../currency.svg';
import quote from '../quote.svg';
import calendar from '../calendar.svg';
import unit from '../unit.svg';
import zodiac from '../zodiac.svg';
import clock from '../clock.svg';
import game from '../game.svg';

import facebook from '../facebook.svg';
import linkedin from '../linkedin.svg';
import medium from '../medium.svg';
import twitter from '../twitter.svg';

//import { DndProvider } from 'react-dnd';
//import Backend from 'react-dnd-html5-backend';


class Dashboard extends Component {

    state = {
        widgets: [],
        images: [
          { id: 1, img: weather,  name: 'weather' },
          { id: 2, img: currency, name: 'currency'},
          { id: 3, img: quote,    name: 'quote' },
          { id: 4, img: calendar, name: 'calendar'},
          { id: 5, img: clock,    name: 'clock' },
          { id: 6, img: zodiac,   name: 'zodiac'},
          { id: 7, img: game,     name: 'game' },
          { id: 8, img: unit,     name: 'unit' }
        ],
        theme: "",
    }

   


   
    
        onDrop = (dropResult) => {
            console.log( dropResult)
            
            const { addedIndex, payload } = dropResult;
            
            const widgets = [...this.state.widgets]
            console.log( this.props.dashboardID)
            console.log( payload.id)
            console.log( widgets)


            fetch("http://localhost:4000/widget_dashes", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  "Authorization": localStorage.token
                },
                body: JSON.stringify({
        
                  widget_id: payload.id,
                  dashboard_id: this.props.dashboardID
                 
        
                })
              })
              .then(r => r.json())
              .then((newlyCreatedWidgetDash) => {
                  console.log(newlyCreatedWidgetDash)
                
                 this.props.addOneWidget(newlyCreatedWidgetDash);
              })
             
            
            //added index matches widget dash location (send to add widget in state to pass props up)

            //...... app........
            // setstate of userWidgets
            //
            //go to docs e.addedIndex is prob location dropped on/ e.payload is what you're dropping 
                    
          }
        
          handleThemeChange = (name, id) => {
            console.log(id)
              console.log(this.props.themeName)
              console.log(name)
            //   let name = e.target.value

            fetch(`http://localhost:4000/users/${this.props.user.id}`, {
                method: "PATCH",
                headers: {
                "Authorization": localStorage.token,
                "content-type": "application/json"
                },
                body: JSON.stringify({
                new_id: id
                
                })
            })
            .then(r => r.json())
            .then((updatedTheme) => {
                this.props.updateTheme(updatedTheme)
            })
            }
            // let theme = e.target.value;
            
            // this.setState({ theme });
          
         // updateTheme={this.props.updateTheme}
       
    render() {
    
        //console.log(this.props.user)
        // debugger
        const themeDots = this.props.themeNames.map(theme => {
            
            return <button className={theme.name} key={theme.id} value={theme} theme={theme} token={this.props.token} onClick={ ()=> this.handleThemeChange( theme.name,theme.id)} ></button>
           })
           
           const { images } = this.state;
           

           const currentHour = new Date().getHours();

           const greetingMessage =
           currentHour >= 4 && currentHour < 12 ? // after 4:00AM and before 12:00PM
           'Good Morning' :
           currentHour >= 12 && currentHour <= 17 ? // after 12:00PM and before 6:00pm
           'Good Afternoon' :
           currentHour > 17 || currentHour < 4 ? // after 5:59pm or before 4:00AM (to accommodate night owls)
           'Good Evening' : // if for some reason the calculation didn't work
           'Welcome'
      
          
        return (
            // <DndProvider backend={Backend}>
            <div className="dashContainer">
                {/* column 1 */}
                <div className="columnContainer">
                    <InvertedFont>
                        <h3> {greetingMessage} {this.props.user.name} </h3>
                    </InvertedFont>
                    <ThemePanel>
                            <p>Theme:</p>
                            {themeDots}

                        </ThemePanel>
                        <InvertedFont/>
                        <SVGPanel className="iconPanel">
                            <h3 className="titleWidgPanel">Customize <br/> Widgets</h3>
                            <p>Drag & Drop <br/> to empty spots</p>
                            {/* <Svgs/> */} 
                            <Container
                            groupName="1"
                            behaviour="copy"
                            getChildPayload={index => images[index]}
                            >
                            {images.map(icon => (
                            <Draggable key={icon.id}>
                            <img src={icon.img} className="widgetIcons" id={icon.id} name={icon.name} alt={icon.name} />
                            </Draggable>
                            ))}
                            </Container>

                        </SVGPanel>

                </div>



                {/* column 2 */}
                <div className="columnCenterContainer">
                <Container
                    dropPlaceholder={false}
                    shouldAnimateDrop={() => false}
                    groupName="1"
                    behaviour="drop-zone"
                    onDrop={this.onDrop}
                    >
                        <WidgetDash  widgetDash={this.props.widgetDash}  userWidgets={this.props.userWidgets} addOneWidget={this.props.addOneWidget} deleteWidget={this.props.deleteWidget} token={this.props.token}/>
                   
                </Container>    
                
        
       
                    
                        <NewsContainer searchTerm={this.props.searchTerm} changeSearchTerm={this.props.changeSearchTerm}  themes={this.props.themes} results={this.props.results}/>
                    
                </div>



                {/* column 3 */}
                <div className="columnRightContainer">
                    <Button onClick={this.props.clearUser}>Sign Out</Button>
                    <MediaPanel className="iconMediaPanel">
                        <h3>Social</h3>
                        <a href="https://www.facebook.com/" >
                        <img src={facebook} className="widgetMIcons" alt="facebook" />
                        </a>

                        <a href="https://twitter.com/CoralFussman" >
                        <img src={twitter} className="widgetMIcons" alt="twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/coral-fussman-21721538/" >
                        <img src={linkedin} className="widgetMIcons" alt="linkedin" />
                        </a>
                        <a href="https://medium.com/@coralfussman" >
                        <img src={medium} className="widgetMIcons" alt="medium" />
                        </a>

                    </MediaPanel>
                </div>


                
            </div>
            // </DndProvider>
        )
    }
}
export default Dashboard;
// module.exports = dragDropContext(HTML5Backend)(Dashboard);
//export default DragDropContext(HTML5Backend)(Dashboard);

