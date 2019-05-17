import React, {Component} from 'react';
import './Buttons.css'


class Buttons extends Component {
  render() {
    return(
      <div>
        <div className="btn-wrap"><button className="btn" onClick={this.props.startTimer}>START</button></div>
        <div className="btn-wrap"><button className="btn" onClick={this.props.pauseTimer}>PAUSE</button></div>
        <div className="btn-wrap"><button className="btn" onClick={this.props.resetTimer}>RESET</button></div>
      </div>
    )
  }
}

export default Buttons
