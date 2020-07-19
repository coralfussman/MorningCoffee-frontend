import React, { Component } from 'react'

import Widget from './Widget';

import EmptyWidget from './EmptyWidget';


export default class WidgetDash extends Component {
    state= {
        widget1: [],
        widget2: [], 
        widget3: [],
        widget4: []
    }


    handleDrop = () => { }


    render() {
        console.log(this.props.widgets)

        const widge1 = this.props.widgets.map(widgeType => (
            widgeType === null 
                ? <EmptyWidget/>
                : <Widget key={widgeType.id} type={widgeType} deleteWidget={this.props.deleteWidget}/>
            
        ))
        const widge2 = this.props.widgets.map(widgeType => (
            widgeType === null 
                ? <EmptyWidget/>
                :  <Widget key={widgeType.id} type={widgeType} deleteWidget={this.props.deleteWidget}/>
            
        ))
        const widge3 = this.props.widgets.map(widgeType => (
            widgeType === null 
                ? <EmptyWidget/>
                : <Widget key={widgeType.id} type={widgeType} deleteWidget={this.props.deleteWidget}/>
            
        ))
        const widge4 = this.props.widgets.map(widgeType => (
            widgeType === null 
                ? <EmptyWidget/>
                : <Widget key={widgeType.id} type={widgeType} deleteWidget={this.props.deleteWidget}/>
            
        ))
        return (
            <div>
             
             {widge1}
             {widge2}
             {widge3}
             {widge4}
               
            </div>
        )
    }
}






   {/* <div onDrop={this.handleDrop}> {
                this.state.widget1 ?
                 <Widget1/> 
                 : 
                 <EmptyWidget/>} 
                 </div>


                 <div onDrop={this.handleDrop}> {
                this.state.widget2 ?
                 <Widget2/> 
                 : 
                 <EmptyWidget/>} 
                 </div>


                 <div onDrop={this.handleDrop}> {
                this.state.widget3 ?
                 <Widget3/> 
                 : 
                 <EmptyWidget/>} 
                 </div>


                 <div onDrop={this.handleDrop}> {
                this.state.widget4 ?
                 <Widget4/> 
                 : 
                 <EmptyWidget/>} 
                 </div> */}
               
                {/* <Widget1 type={this.state.widget1.type}/> */}


                // how Caryn had it

                // const widge4 = ["sudoku", "weather", null, null].map(widgeType => (
                //     widgeType === null 
                //         ? <EmptyWidget/>
                //         : <Widget type={widgeType}/>
                    
                // ))