import React, { Component } from 'react'
import Widget from './Widget';
import EmptyWidget from './EmptyWidget';

// import { DropTarget } from 'react-dnd'

export default class WidgetDash extends Component {
   
    render() {
        // console.log(this.props.userWidgets)
        // console.log(this.props.widgetDash)
        
        const widgets = this.props.userWidgets.map(widgeType => (
            widgeType === null 
                ? <EmptyWidget/>
                : <Widget key={widgeType.id} widget={widgeType} type={widgeType.title} widgetDash={this.props.widgetDash} onDrag={this.handleUpdate} deleteWidget={this.props.deleteWidget}/>
        
        ))
       
        return (
            <div className="rowContainer">

             {widgets}
            
            </div>
        )
    }
}
