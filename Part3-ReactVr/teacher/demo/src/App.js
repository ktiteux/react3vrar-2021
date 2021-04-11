import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  Sound,
  VrButton
} from 'react-vr';

import Plant from './Plant';
import Batman from './Batman';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      background360: 'ccr.jpeg',
      sound: 'ccr.wav',
      visible: true
    };
  }
  changeScene = () => {
    if (this.state.visible) {
      this.setState({
        background360: 'lac.jpeg',
        sound: 'birds.wav',
        visible: false
      });
    } else {
      this.setState({
        background360: 'ccr.jpeg',
        sound: 'ccr.wav',
        visible: true
      })
    }
  }

  renderItems = () => {
    if (this.state.visible) {
      return <Plant />
    } else {
      return <Batman />
    }
  }
  render() {
    return (
      <View>

        <Pano source={asset(this.state.background360)} />
        <Sound
          loop={true}
          volume={9}
          source={{ wav: asset(this.state.sound) }}
        />
        {this.renderItems()}
        <VrButton onClick={this.changeScene}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0, -3] }],
            }}>
            hi
        </Text>
        </VrButton>
      </View >
    );
  }
};
