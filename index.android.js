import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  /* Button,
  TouchableHighlight,
  Image,*/
} from 'react-native';
// import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import Station from './app/components/Station.js';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  wideButton: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 20,
  },
});

// const startStream = () => {
//   const url = 'http://ice1.somafm.com/groovesalad-128-mp3';
//   ReactNativeAudioStreaming.play(url, { showIniOSMediaCenter: true, showInAndroidNotifications: true });
// };

export default class alarm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Station stationName="groovesalad" />

        {/* <TouchableHighlight onPress={startStream}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require('./app/images/groovesalad.jpg')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={startStream}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require('./app/images/dronezone.jpg')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={startStream}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require('./app/images/spacestation.jpg')}
          />
        </TouchableHighlight>*/}

        {/* <View style={styles.wideButton}>
          <Button
            color="salmon"
            onPress={startStream}
            title="Play"
          />
        </View>*/}
      </View>
    );
  }
}

AppRegistry.registerComponent('alarm', () => alarm);
