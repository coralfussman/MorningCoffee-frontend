import React, { Component } from 'react'
import Widget from './Widget';
import EmptyWidget from './EmptyWidget';



export default class WidgetDash extends Component {
   
    render() {
         console.log(this.props.userWidgets, "users widgets")
         
        
        const widgets = this.props.userWidgets.map(widgeType => (
            widgeType === null 
                ? <EmptyWidget/>
                : <Widget key={widgeType.id} widget={widgeType} type={widgeType.title} widgetDash={this.props.widgetDash} onDrag={this.handleUpdate} deleteWidget={this.props.deleteWidget}/>
        
        ))
        console.log("WIDGET DASH")
       
        return (
            <div className="rowContainer">

             {widgets}
            
            </div>
        )
    }
}


// const widgets = this.props.user.dashboards[0].widgets.map(widgeType => (
//     widgeType === null 
//         ? <EmptyWidget/>
//         : <Widget key={widgeType.id} widget={widgeType} type={widgeType.title} widgetDash={this.props.widgetDash} onDrag={this.handleUpdate} deleteWidget={this.props.deleteWidget}/>

// ))