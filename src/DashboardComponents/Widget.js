import React, { Component } from 'react'



class Widget extends Component {
    state={
        title: []
      }
      
      
    //   showWidget = (id) => {
    //       const findWidget = this.state.widgets.find(widgeObj => widgeObj.id === id)
    //       if (this.state.widget === false){
    //         this.setState({
    //           selectedWidget: findWidget,
    //           widget: true
    //         })
    //       }
    //     }

  

    render() {
        
        const widgetSRC = {
            sudoku: "https://widgetscode.com/wc/sudoku/all?",
             clock: "https://widgetscode.com/wc/mclock/all?skin",
              math: "https://widgetscode.com/wc/math/all?skin=blk0",
          calendar: "//widget.calendarlabs.com/v1/calendar.php?cid=1001&ver=1.2&uid=6984472368&c=8&l=en&cbg=FFFFFF&cfg=000000&hfg=000000&hfg1=000000&ct=1&cb=0&cbc=2275FF&cf=verdana&cp=bottom&sw=0&hp=t&ib=0&ibc=&i=images/",
             quote: "//widget.calendarlabs.com/v1/quot.php?cid=101&ver=1.2&uid=2391332988&c=random&l=en&cbg=FFFFFF&cb=1&cbc=FFFFFF&cf=arial&cfg=262626&qfs=bi&qta=center&tfg=000000&tfs=bi&afc=000000&afs=i",
              unit: "https://widgetscode.com/wc/acute1/all?",
           weather: "https://www.meteoblue.com/en/weather/widget/daily?geoloc=detect&days=5&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=monochrome&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&pressure=0&layout=light"

            }
        

        return (
            <div>
            
            <iframe title={this.props.title} src={widgetSRC[this.props.type]} width="320px" height="250px" frameborder="0"></iframe>
            </div>
        )
    }
}
export default Widget;


{/* <iframe title="quote" src="//widget.calendarlabs.com/v1/quot.php?cid=101&ver=1.2&uid=2391332988&c=random&l=en&cbg=FFFFFF&cb=1&cbc=FFFFFF&cf=arial&cfg=262626&qfs=bi&qta=center&tfg=000000&tfs=bi&afc=000000&afs=i" frameborder="0" width="320px" height="250px"></iframe>
       
<iframe title="clock" src='https://widgetscode.com/wc/mclock/all?skin' width="320px" height="250px" frameborder="0"></iframe>

<iframe title="sudoku" src='https://widgetscode.com/wc/sudoku/all?' width="320px" height="250px" frameborder="0"></iframe>

<iframe title="math"src='https://widgetscode.com/wc/math/all?skin=blk0' width="320px" height="250px" frameborder="0"></iframe>

<iframe title="calendar" src="//widget.calendarlabs.com/v1/calendar.php?cid=1001&ver=1.2&uid=6984472368&c=8&l=en&cbg=FFFFFF&cfg=000000&hfg=000000&hfg1=000000&ct=1&cb=0&cbc=2275FF&cf=verdana&cp=bottom&sw=0&hp=t&ib=0&ibc=&i=images/" align="center" width="170" height="155" allowtransparency='true'></iframe>

<iframe title="unit" src='https://widgetscode.com/wc/acute1/all?' width="320px" height="250px" frameborder="0"></iframe>

<iframe title="weather" src="https://www.meteoblue.com/en/weather/widget/daily?geoloc=detect&days=5&tempunit=FAHRENHEIT&windunit=MILE_PER_HOUR&precipunit=INCH&coloured=monochrome&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&pressure=0&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" width="270px" height="285px" ></iframe> */}
