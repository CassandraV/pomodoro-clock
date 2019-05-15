import React, {Component} from 'react';
import Sound from 'react-sound';
 
class WorkDoneSound extends React.Component {
  render() {
    return (
      <Sound
        url="./game_over.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}

export default WorkDoneSound