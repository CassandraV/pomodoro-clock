import React, {Component} from 'react';
import Sound from 'react-sound';
import soundfile from './game_over.mp3'
 
class WorkDoneSound extends Component {
   constructor(props) {
    super(props);
    this.state = {
      soundOn: true
    };
    this.turnOfSound = this.turnOfSound.bind(this);
    // this.turnOnSound = this.turnOnSound.bind(this);
  }

  turnOfSound(Sound){
    // this.setState({soundOn: false});
  }

  render() {
    // console.log(`workDone:${this.props.workDone}\nsoundOn:${this.state.soundOn}`)
    if(this.props.workDone && this.state.soundOn){
      return (
        <Sound
        url={soundfile}
        playStatus={Sound.status.PLAYING}
        onFinishedPlaying ={this.turnOfSound()}></Sound>
      );
    }
    else{
      return(<div></div>)
    }
  }
}

export default WorkDoneSound