import React, { Component } from 'react';
import { asset, View, VrButton, Animated, Sound } from 'react-360';
import Easing from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default class EMU extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emuRotToZ: new Animated.Value(0),
      audio: true,
      wavFile: '/578628main_hskquindar.mp3'
    }
  }

  startAudio = () => {
    this.setState({ audio: !this.state.audio })
  }
  useAudio() {
    if (this.state.audio) {
      return (
        <Sound
          source={{ wav: asset(this.state.wavFile) }}
          loop={false}
          volume={0.9}
        />
      );
    }
  }
  componentDidMount() {
    this.state.emuRotToZ.setValue(0);
    Animated.timing(
      this.state.emuRotToZ,
      {
        toValue: -300,
        duration: 10000,
        delay: 2000,
        easing: Easing.inOut
      }
    ).start();
  }
  render() {
    return (
      <View>
        <VrButton onClick={this.startAudio}>

          <AnimatedEntity
            source={{
              obj: asset('/EMU/EMU.obj'),
              mtl: asset('/EMU/EMU.mtl'),
            }}
            style={{
              transform: [
                { translateZ: 3 },
                { scaleX: 50 },
                { scaleY: 50 },
                { scaleZ: 50 },
                { rotateX: -180 },
                { rotateZ: this.state.emuRotToZ }
              ]
            }}
          />
        </VrButton>
        {this.useAudio()}
      </View>
    );
  }
}