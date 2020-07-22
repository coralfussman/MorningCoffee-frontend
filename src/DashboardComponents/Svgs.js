import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

import weather from '../weather.svg';
import quotes from '../quotes.svg';
import currency from '../currency.svg';
import calendar from '../calendar.svg';
import dictionary from '../dictionary.svg';
import HTML5Backend from 'react-dnd-html5-backend';
const svgSource = {
    beginDrag(props) {
      console.log('dragging');
      return props.svg;
    },
    endDrag(props, monitor, component) {
      if (!monitor.didDrop()) {
        return;
      }
  
      return props.handleDrop(props.svg.id);
    }
  }

  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    }
  }

 class Svgs extends Component {
    render() {

        const { isDragging, connectDragSource, svg } = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDragSource (
            <div>
                            <img src={weather} onDrag={this.chosenWidget} className="widgetIcons" id="1" image="image" alt="weather" />
                            <img src={currency} onDrag={this.chosenWidget} className="widgetIcons" id="2" alt="currency" />
                            <img src={quotes} onDrag={this.chosenWidget} className="widgetIcons" id="3" alt="quotes" />
                            <img src={calendar} onDrag={this.chosenWidget} className="widgetIcons" id="4" alt="calendar" />
                            <img src={dictionary} onDrag={this.chosenWidget} className="widgetIcons" id="5" alt="dictionary" />
                            <img src={quotes} onDrag={this.chosenWidget} className="widgetIcons" id="6" alt="quotes" />

            </div>
        )
    }
}

export default DragSource('svg', svgSource, collect)(Svgs);