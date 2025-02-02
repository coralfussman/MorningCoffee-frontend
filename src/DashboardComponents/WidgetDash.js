import React, { Component } from 'react'
import Widget from './Widget';
import EmptyWidget from './EmptyWidget';
import { WidgeDash} from './Themes';


export default class WidgetDash extends Component {
   
    render() {
         console.log(this.props.userWidgets, "users widgets")
         
        
        const widgets = this.props.userWidgets.map((widgeType) => (
              
             <Widget key={widgeType.id} widget={widgeType} type={widgeType.title} widgetDash={this.props.widgetDash} onDrag={this.handleUpdate} deleteWidget={this.props.deleteWidget}/>
        
        ))
        console.log("WIDGET DASH")
       
        return (
            <WidgeDash>

           

             {widgets.length === 0 ? <EmptyWidget/> : widgets }
            
            </WidgeDash>
        )
    }
}


// const widgets = this.props.user.dashboards[0].widgets.map(widgeType => (
//     widgeType === null 
//         ? <EmptyWidget/>
//         : <Widget key={widgeType.id} widget={widgeType} type={widgeType.title} widgetDash={this.props.widgetDash} onDrag={this.handleUpdate} deleteWidget={this.props.deleteWidget}/>

// ))