import React, { Component } from 'react';
import {
  TouchableHighlight,
  Image,
} from 'react-native';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';


class Station extends Component {
  // constructor(props) {
  //   super(props);
  //   this.startStream = this.startStream.bind(this);
  // }

  startStream() {
    const stationName = this.props.stationName;

    const url = `http://ice1.somafm.com/${stationName}-128-mp3`;
    ReactNativeAudioStreaming.play(
      url, { showIniOSMediaCenter: true, showInAndroidNotifications: true }
    );
  }

  render() {
    const stationName = this.props.stationName;

    return (
      <TouchableHighlight onPress={this.startStream}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require(`./app/images/${stationName}.jpg`)}
        />
      </TouchableHighlight>
    );
  }
}

Station.propTypes = {
  stationName: React.PropTypes.string,
};


module.exports = Station;
