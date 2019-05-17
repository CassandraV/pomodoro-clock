import React, {Component} from 'react';
import './Timer.css'
// import WorkDoneSound from '../sounds/WorkDoneSound'
// import BreakTimer from '../break/BreakTimer'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullWorkingSeconds: 25*60,
      fullBreakTime: 5*60,
      seconds: 0.1*60,
      intervalTime: undefined,
      onPause: false,
      started: false,
      workDoneSound: false,
      breakTime: 0.1*60,
      intervals: 0,
      isOnBreak:false,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.timer = this.timer.bind(this);
    this.secondsToMinutes = this.secondsToMinutes.bind(this);
    this.decreaseBreakTime = this.decreaseBreakTime.bind(this);
    this.increaseBreakTime = this.increaseBreakTime.bind(this);
  }

  startTimer(){
    this.setState(
      { started: true,
        isOnBreak: false,
        workDone: false
      }, () => {this.timer()} 
    )
  }

  pauseTimer(){
    this.setState({
      onPause:true
    })
    clearInterval(this.intervalTime);
  }

  stopTimer(){
    this.resetTimer();
    this.startBreak();
  }

  resetTimer(){
    this.setState({
      started: false,
      seconds: this.state.fullWorkingSeconds,
    })
    clearInterval(this.intervalTime);
  }

  timer(){
    if(!this.onPause){    
      this.intervalTime = setInterval(() => {
        if(this.state.seconds > 0){
          this.setState({seconds: this.state.seconds - 1});
        }
        else{
          this.setState({workDoneSound: true});
          this.stopTimer();
          this.setState({intervals: this.state.intervals + 1});
        }
      }, 1000);
    }
  }

  breakTimer(){
    if(this.state.isOnBreak){    
      this.intervalBreakTime = setInterval(() => {
        if(this.state.breakTime > 0){
          this.setState({breakTime: this.state.breakTime - 1});
        }
        else{
          this.setState({
            breakDoneSound: true, 
            isOnBreak:false});
         this.resetBreakTimer(); 
        }
      }, 1000);
    }
  }

  startBreak(){
    this.setState(
      { isOnBreak: true,
      }, () => {this.breakTimer()} 
    )
  }

  resetBreakTimer(){
    if(this.state.intervals < 4){
      this.setState({
        isOnBreak: false,
        breakTime: this.state.fullBreakTime,
        workDoneSound: false
      })
    }
    else{
      this.setState({
        isOnBreak: false,
        fullBreakTime: 20*60,
        breakTime:20*60,
      })
    }
    clearInterval(this.intervalBreakTime);
  }

  decreaseBreakTime(){
    this.setState({fullBreakTime: this.state.fullBreakTime - 1, breakTime:this.state.breakTime - 1 })
  }

  increaseBreakTime(){
    this.setState({fullBreakTime: this.state.fullBreakTime - 1})
  }

  secondsToMinutes(time){
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return(`${minutes}:${seconds.toLocaleString('en-GB',{minimumIntegerDigits: 2})}`)
  }


  render() {
    return(
      <div>
        <div className="timer left">
          <div className="timer-title">Working Time</div>
          <div className="time-wrap">
            <div className="time">-</div>
            <div className="time">{this.secondsToMinutes(this.state.seconds)}</div>
            <div className="time">+</div>
          </div>
          {/*<WorkDoneSound workDone={this.state.workDoneSound}></WorkDoneSound>*/}
        </div>
        <div className="timer">
          <div className="timer-title">Break Time</div>
          <div className="time-wrap">
            <button className="time" onClick={this.decreaseBreakTime}>-</button>
            <div className="time">{this.secondsToMinutes(this.state.breakTime)}</div>
            <button className="time" onClick={this.increaseBreakTime}>+</button>
          </div>
        </div>
        <div className="wrap">
          <div className="start-button"><button className="btn btn-start" onClick={this.startTimer}>START</button></div>
          <div className="pause-button"><button className="btn btn-pause" onClick={this.pauseTimer}>PAUSE</button></div>
          <div className="reset-button"><button className="btn btn-reset" onClick={this.resetTimer}>RESET</button></div>
        </div>
      </div>)
  }
}

export default Timer
