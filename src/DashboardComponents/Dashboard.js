import React, { Component } from 'react'
//import {WidgetDash, NewsContainer} from './DashboardComponents';
import NewsContainer from './NewsContainer';
import WidgetDash from './WidgetDash';
import ThemeDot from './ThemeDot';

import weather from '../weather.svg';
import quotes from '../quotes.svg';
import currency from '../currency.svg';
import facebook from '../facebook.svg';
import linkedin from '../linkedin.svg';
import medium from '../medium.svg';
import twitter from '../twitter.svg';



class Dashboard extends Component {


 chosenWidget = () => {
    console.log("anything")
}
   
    render() {
        console.log(this.props.themes)
        console.log(this.props.results)
        console.log(this.props.widgets)

        const themesDot = this.props.themes.map(theme => {
            return <ThemeDot key={theme.id} themeName={theme.name} token={this.props.token} updateTheme={this.props.updateTheme} />
           })


        return (
            <div className="dashContainer">
                {/* column 1 */}
                <div className="columnContainer">
                    <h3> Good Morning {this.props.user.name} </h3>
                        <div className="themePanel">
                            <p>Theme:</p>
                            <ThemeDot className="themeDots2"/>
                            {/* <ThemeDot className="themeDots2"/>
                            <ThemeDot className="themeDots3"/> */}

                        </div>
                        <div className="iconPanel">
                            <h2>Customize <br/> Widgets</h2>
                            <p>Drag & Drop <br/> to empty spots</p>
                            <img src={weather} onClick={this.chosenWidget} className="widgetIcons" alt="weather" />
                            <img src={currency} className="widgetIcons" alt="currency" />
                            <img src={quotes} className="widgetIcons" alt="quotes" />

                        </div>

                </div>



                {/* column 2 */}
                <div className="columnCenterContainer">
                    <div className="rowContainer">
                    <WidgetDash className="widgeDash" widgets={this.props.widgets} token={this.props.token}/>
                    </div>
                    <div className="newsContainer">
                    <NewsContainer themes={this.props.themes} results={this.props.results}/>
                    </div>
                </div>



                {/* column 3 */}
                <div className="columnRightContainer">
                    <div className="iconMediaPanel">
                        <h2>Social</h2>
                        <img src={facebook} className="widgetMIcons" alt="facebook" />
                        <img src={twitter} className="widgetMIcons" alt="twitter" />
                        <img src={linkedin} className="widgetMIcons" alt="linkedin" />
                        <img src={medium} className="widgetMIcons" alt="medium" />

                    </div>
                </div>


                
            </div>
        )
    }
}
export default Dashboard;