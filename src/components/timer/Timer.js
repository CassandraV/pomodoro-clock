import React, {Component} from 'react';
import './Timer.css'
// import WorkDoneSound from '../sounds/WorkDoneSound'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 1*60,
      seconds: '00',
      intervalTime: undefined,
      breakTime: 5,
      onBreak: true,
      onPause: false,
      started: false,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.timer = this.timer.bind(this);
  }

  timer(){
    if(this.state.started && !this.onPause){    
      this.intervalTime = setInterval(() => {
        if(this.state.minutes > 0){
          this.setState({minutes: this.state.minutes - 1});
        }
        else{
          this.setState({
            started: false
          });
        }
      }, 1000);
    }
  }

  startTimer(){
    this.setState(
      { started: true }, () => {this.timer()} 
    )
  }

  pauseTimer(){
    this.setState({
      onPause:true
    })
    clearInterval(this.intervalTime);
  }

  resetTimer(){
    this.setState({
      started: false,
      minutes:25*60
    })
    clearInterval(this.intervalTime);
  }

  render() {
    return(
      <div className="timer">
        <div className="time">{this.state.minutes}</div>
        {/*<WorkDoneSound></WorkDoneSound>*/}
        <div className="wrap">
          <div className="start-button"><button className="btn btn-start" onClick={this.startTimer}>START</button></div>
          <div className="pause-button"><button className="btn btn-pause" onClick={this.pauseTimer}>PAUSE</button></div>
          <div className="reset-button"><button className="btn btn-reset" onClick={this.resetTimer}>RESET</button></div>
        </div>
      </div>)
  }
}

export default Timer
