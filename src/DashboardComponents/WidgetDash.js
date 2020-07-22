import React, { Component } from 'react'
import Widget from './Widget';
import EmptyWidget from './EmptyWidget';

// import { DropTarget } from 'react-dnd'

export default class WidgetDash extends Component {
    state= {
        widget1: [],
        widget2: [], 
        widget3: [],
        widget4: []
    }


    // handleDrop = () => { }
// componentDidUpdate(
//     fetch("http://localhost:4000/widget_dashes", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           "Authorization": localStorage.token
//         },
//         body: JSON.stringify({

//           widget_id: this.props.widget.id,
         

//         })
//       })
//       .then(r => r.json())
//       .then((newlyCreatedWidgetDash) => {
//           console.log(newlyCreatedWidgetDash)
     
//          this.props.addOneWidget(newlyCreatedWidgetDash);
//       })
     
// )

    handleCreate = (evt) => {
        
        //evt.preventDefault()
        //console.log(this.props)
        
       
    }


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

// export default DropTarget('svg', {}, collect)(WidgetDash);