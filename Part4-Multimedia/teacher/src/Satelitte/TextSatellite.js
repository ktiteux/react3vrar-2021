import React, { Component } from 'react';
import { View, Text, Video, VrButton, asset, VideoControl, MediaPlayerState, } from 'react-360';

export default class TextSatellite extends Component {


  constructor(props) {
    super(props);
    this.state = {
      textNasa: 'Nasa Aqua Satellite - Click Here',
      videoNasa: false,
      nasaState: new MediaPlayerState({})
    }
  }

  startVideoNasa = () => {
    console.log('Nasa video == true');
    this.setState({ videoNasa: !this.state.videoNasa });
  }

  render() {
    console.log('videoNasa = ' + this.state.videoNasa);
    return (
      <View
        style={{
          transform: [
            { translateX: -6 },
            { translateY: 1.5 },
            { translateZ: 1.5 },
            { rotateY: 90 }
          ]
        }}>

        {/* Contenu conditionnel */}
        { !this.state.videoNasa
          ? <VrButton
            onClick={this.startVideoNasa}
          >
            <Text
              style={{
                backgroundColor: 'teal',
                fontSize: 0.5,
                fontWeight: '400',
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlignVertical: 'center',
                textAlign: 'center',

              }}
            >
              {this.state.textNasa}
            </Text>
          </VrButton>
          :
          <View
            style={{
              transform: [
                { translateX: 52 },
                { translateY: 250.5 },
                { translateZ: -802.5 },
              ]
            }} >
            <VrButton
              onClick={this.startVideoNasa}
            >

              <Text
                style={{
                  backgroundColor: 'teal',
                  fontSize: 50,
                  fontWeight: '400',
                  textAlignVertical: 'center',
                  textAlign: 'center',
                  transform: [
                    { translateX: -.5 },
                    { translateY: -352 },
                  ]
                }}
              >
                Fermer
          </Text>
            </VrButton>

            <Video
              source={{ uri: '../../static_assets/Nasa_aqua.mp4' }}
              style={{
                height: 250,
                width: 450,
              }}
              playerState={this.state.nasaState}
              volume={0.2}
            />

            <VideoControl
              style={{
                width: 450,
                height: 30,
              }}
              playerState={this.state.nasaState}
            />
          </View>
        }
      </View >
    );
  }
}