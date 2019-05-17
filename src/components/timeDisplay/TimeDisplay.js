import React, {Component} from 'react';
import './TimeDisplay.css'

class TimeDisplay extends Component {
  render() {
    return(
      <div>
        <div className="timer-title">{this.props.title}</div>
        <div className="time-wrap">
          <div className="time" onClick={this.props.decreaseTime}>-</div>
          <div className="time">{this.props.time}</div>
          <div className="time" onClick={this.props.increaseTime}>+</div>
        </div>
      </div>)
  }
}

export default TimeDisplay
