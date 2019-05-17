import React, {Component} from 'react';


class Buttons extends Component {
  render() {
    return(
      <div className="wrap">
        <div className="start-button"><button className="btn btn-start" onClick={this.props.startTimer}>START</button></div>
        <div className="pause-button"><button className="btn btn-pause" onClick={this.props.pauseTimer}>PAUSE</button></div>
        <div className="reset-button"><button className="btn btn-reset" onClick={this.props.resetTimer}>RESET</button></div>
      </div>
    )
  }
}

export default Buttons
