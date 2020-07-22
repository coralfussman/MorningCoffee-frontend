import React, { Component } from 'react'
//import {WidgetDash, NewsContainer} from './DashboardComponents';
import NewsContainer from './NewsContainer';
import WidgetDash from './WidgetDash';
import Widget from './Widget';
import { Container, Draggable } from "react-smooth-dnd";
//import {weather, quotes, currency, calendar} from './DashboardComponents'
//import Svgs from './Svgs';

import weather from '../weather.svg';
import currency from '../currency.svg';
import quote from '../quote.svg';
import photo from '../photo.svg';
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
          { id: 4, img: photo,    name: 'photo' },
          { id: 5, img: clock,    name: 'clock' },
          { id: 6, img: zodiac,   name: 'zodiac'},
          { id: 7, img: game,     name: 'game'  },
          { id: 8, img: unit,     name: 'unit'  }
        ]}

   


   
    
        onDrop = (dropResult) => {
            console.log( dropResult)
            
            const { addedIndex, payload } = dropResult;
            
            const widgets = [...this.state.widgets]
            console.log( this.props.dashboardID)
            console.log( payload.id)
            console.log( widgets)



            // this.setState({
            //   widgets: [...widgets, payload]
            // })
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

            // debugger

            // if(this.state.images.name === this.state.widgets.name){
            // const selectedWidge = this.props.widgets.map(widgeType => (
            //          ( <Widget key={widgeType.id} type={widgeType.title} widgetDash={this.props.widgetDash} onDrag={this.handleUpdate} deleteWidget={this.props.deleteWidget}/>)
            
            //         ))}
                    
          }
        
    

   
    render() {
        // console.log(this.props.userThemes[0].name)
        // console.log(this.props.themeNames)
        console.log(this.props.widgetDash)
     
        const themesDot = this.props.themeNames.map(theme => {
            return <button className={theme.name} key={theme.id} themeName={theme.name} token={this.props.token} updateTheme={this.props.updateTheme} ></button>
           })

           const { images } = this.state;


        return (
            // <DndProvider backend={Backend}>
            <div className="dashContainer">
                {/* column 1 */}
                <div className="columnContainer">
                    <h3> Good Morning {this.props.user.name} </h3>
                        <div className="themePanel">
                            <p>Theme:</p>
                            <div className="coffee"></div>
                            <div className="blue"></div>
                            <div className="coral"></div>
                            {/* <ThemeDot className="themeDots2"/>
                            <ThemeDot className="themeDots3"/> */}

                        </div>
                        <div className="iconPanel">
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

                        </div>

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
                         <WidgetDash  widgetDash={this.props.widgetDash} userWidgets={this.props.userWidgets} deleteWidget={this.props.deleteWidget} token={this.props.token}/>
                   
                </Container>    
                    
                        <NewsContainer themes={this.props.themes} results={this.props.results}/>
                    
                </div>



                {/* column 3 */}
                <div className="columnRightContainer">
                    <button className="button" onClick={this.props.clearUser}>Sign Out</button>
                    <div className="iconMediaPanel">
                        <h3>Social</h3>
                        <img src={facebook} className="widgetMIcons" alt="facebook" />
                        <img src={twitter} className="widgetMIcons" alt="twitter" />
                        <img src={linkedin} className="widgetMIcons" alt="linkedin" />
                        <img src={medium} className="widgetMIcons" alt="medium" />

                    </div>
                </div>


                
            </div>
            // </DndProvider>
        )
    }
}
export default Dashboard;
// module.exports = dragDropContext(HTML5Backend)(Dashboard);
//export default DragDropContext(HTML5Backend)(Dashboard);

