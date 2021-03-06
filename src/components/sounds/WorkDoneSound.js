import React, {Component} from 'react';
import Sound from 'react-sound';
import soundfile from './ding_ding_ding.mp3'
 
class WorkDoneSound extends Component {
  render() {
    if(this.props.workDone){
      return (
        <Sound
        url={soundfile}
        playStatus={Sound.status.PLAYING}
        onFinishedPlaying ={this.props.stopSound}></Sound>
      );
    }
    else{
      return(<div></div>)
    }
  }
}

export default WorkDoneSound