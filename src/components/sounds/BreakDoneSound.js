import React, {Component} from 'react';
import Sound from 'react-sound';
import soundfile from './game_over.mp3'
 
class WorkDoneSound extends Component {
  render() {
    console.log(`breakDone:${this.props.breakDone}`)
    if(this.props.breakDone){
      return (
        <Sound
        url={soundfile}
        playStatus={Sound.status.PLAYING}
        onFinishedPlaying ={this.props.stopBreakSound}></Sound>
      );
    }
    else{
      return(<div></div>)
    }
  }
}

export default WorkDoneSound