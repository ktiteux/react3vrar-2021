import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Pano, asset, Environment, Animated
} from 'react-360';

import Satellite from './src/Satelitte/Satellite';
import Xwing from './src/Xwing/Xwing';
import EMU from './src/EMU/EMU';
import TieFighter from './src/TieFighter/TieFighter';

export default class teacher extends React.Component {

  render() {
    Environment.setBackgroundImage(asset('space.jpg'));
    return (
      <View style={styles.panel}>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 2000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('teacher', () => teacher);
AppRegistry.registerComponent('Satellite', () => Satellite);
AppRegistry.registerComponent('Xwing', () => Xwing);
AppRegistry.registerComponent('TieFighter', () => TieFighter);
AppRegistry.registerComponent('EMU', () => EMU);