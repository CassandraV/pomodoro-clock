import React, {Component} from 'react';
// import './Break.css'

class Break extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5*60,
      startedBreak: true,
      breakDoneSound: false,
    };
    // this.startBreakTimer = this.startBreakTimer.bind(this);
    // this.pauseTimer = this.pauseTimer.bind(this);
    this.resetBreakTimer = this.resetBreakTimer.bind(this);
    // this.breakTimer = this.breakTimer.bind(this);
    this.secondsToMinutes = this.secondsToMinutes.bind(this);
  }

  // breakTimer(nextProps) {
  //     if(this.props.isOnBreak && this.state.startedBreak){    
  //       this.intervalBreakTime = setInterval(() => {
  //         if(this.state.breakTime > 0){
  //           this.setState({breakTime: this.state.breakTime - 1});
  //         }
  //         else{
  //           this.setState({breakDoneSound: true});
  //           this.resetBreakTimer(); 
  //         }
  //       }, 1000);
  //     }
  // }

  // startBreakTimer(){
  //   this.setState(
  //     { startedBreak: true,
  //       workDoneSound: false
  //     }, () => {this.timer()} 
  //   )
  // }

  resetBreakTimer(){
    if(this.intervals < 4){
      this.setState({
        startedBreak: false,
        seconds:5*60
      })
    }
    else{
      this.setState({
        startedBreak: false,
        seconds:20*60
      })
    }
    clearInterval(this.intervalBreakTime);
  }

  secondsToMinutes(time){
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return(`${minutes}:${seconds.toLocaleString('en-GB',{minimumIntegerDigits: 2})}`)
  }

  render() {
    return(
        <div>
          <div className="timer right">
            <div className="timer-title">Break Time</div>
            <div className="time">{this.secondsToMinutes(this.state.breakTime)}</div>
          </div>
        </div>)
  }
}

export default Break
