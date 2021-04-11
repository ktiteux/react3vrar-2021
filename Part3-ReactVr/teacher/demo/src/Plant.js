import React, { Component } from 'react';

import { asset, View, Model, StyleSheet } from 'react-vr';

export default class Plant extends Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset('/Plant/indoorPlant_03.obj'),
            mtl: asset('/Plant/indoorPlant_03.mtl'),
          }}
          style={{
            position: 'absolute',
            transform: [
              { translate: [-3, -1, -0.2] },
              { scale: 0.25 }
            ]
          }}
        />
      </View>
    )
  }
}