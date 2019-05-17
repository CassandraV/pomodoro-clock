import React, {Component} from 'react';
import './Timer.css'
import WorkDoneSound from '../sounds/WorkDoneSound'
import BreakDoneSound from '../sounds/BreakDoneSound'
import Buttons from '../buttons/Buttons'
import TimeDisplay from '../timeDisplay/TimeDisplay'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullWorkingSeconds: 25*60,
      fullBreakTime: 5*60,
      seconds: 25*60,
      intervalTime: undefined,
      onPause: false,
      started: false,
      workDoneSound: false,
      breakTime: 5*60,
      intervals: 0,
      isOnBreak:false,
      breakDoneSound: false,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.timer = this.timer.bind(this);
    this.secondsToMinutes = this.secondsToMinutes.bind(this);
    this.decreaseBreakTime = this.decreaseBreakTime.bind(this);
    this.increaseBreakTime = this.increaseBreakTime.bind(this);
    this.decreaseTime = this.decreaseTime.bind(this);
    this.increaseTime = this.increaseTime.bind(this);
    this.stopWorkDoneSound = this.stopWorkDoneSound.bind(this);
    this.stopBreakDoneSound = this.stopBreakDoneSound.bind(this);
  }

  startTimer(){
    this.setState(
      { started: true,
        isOnBreak: false,
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

  stopWorkDoneSound(){
    this.setState({
      workDoneSound: false
    })
  }

  decreaseTime(){
    this.setState({seconds:this.state.seconds - 1 })
  }

  increaseTime(){
    this.setState({seconds:this.state.seconds + 1})
  }

  resetTimer(){
    this.setState({
      started: false,
      seconds: this.state.fullWorkingSeconds,
    })
    clearInterval(this.intervalTime);
    this.resetBreakTimer();
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
    // alert("You had 4 intervals of work already lets increase break time!")
  }

  stopBreakDoneSound(){
    console.log("Here I am trying to stop")
    this.setState({
      breakDoneSound: false
    })
  }

  decreaseBreakTime(){
    this.setState({breakTime:this.state.breakTime - 1 })
  }

  increaseBreakTime(){
    this.setState({breakTime:this.state.breakTime + 1})
  }

  secondsToMinutes(time){
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return(`${minutes}:${seconds.toLocaleString('en-GB',{minimumIntegerDigits: 2})}`)
  }


  render() {
    return(
      <div>
        <div className="work-time">
          <TimeDisplay 
            title={'Working Time'}
            decreaseTime={this.decreaseTime}
            time={this.secondsToMinutes(this.state.seconds)}
            increaseTime={this.increaseTime}/>
          <WorkDoneSound workDone={this.state.workDoneSound} stopSound={this.stopWorkDoneSound}></WorkDoneSound>
        </div>
        <div className="break-time">
          <TimeDisplay 
            title={'Break Time'}
            decreaseTime={this.decreaseBreakTime}
            time={this.secondsToMinutes(this.state.breakTime)}
            increaseTime={this.increaseBreakTime}/>
          <BreakDoneSound breakDone={this.state.breakDoneSound} stopBreakSound={this.stopBreakDoneSound}></BreakDoneSound>
        </div>
        <div className="buttons"><Buttons startTimer={this.startTimer} pauseTimer={this.pauseTimer} resetTimer={this.resetTimer}/></div>
      </div>)
  }
}

export default Timer
