import React, { Component } from 'react';
import { asset, View } from 'react-360';
import Entity from 'Entity';

import TextSatellite from './TextSatellite'

export default class Satellite extends Component {
  render() {
    return (
      <View>
        <TextSatellite />
        <Entity
          source={{
            obj: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.obj'),
            mtl: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.mtl'),
          }}
          style={{
            transform: [
              { scaleX: 0.25 },
              { scaleY: .25 },
              { scaleZ: .25 },
              { rotateX: -180 }
            ]
          }}
        />
      </View>
    );
  }
}