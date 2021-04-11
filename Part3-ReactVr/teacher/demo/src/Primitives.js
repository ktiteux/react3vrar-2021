import React, { Component } from 'react';
import { View, Box, Sphere, Cylinder, StyleSheet } from 'react-vr';

export default class Primitives extends Component {
  render() {
    return (
      <View>
        <Box
          dimWidth={1}
          dimHeight={1}
          dimDepth={1}
          style={{
            transform: [
              { translate: [0, 0, -2.5] },
              { scale: 1 },
              { rotateX: 25 },
              { rotateY: 45 }
            ],
            color: 'teal'
          }}
        />
        <Cylinder
          radiusTop={.5}
          radiusBottom={1}
          dimHeight={1.5}
          segments={10}
          style={{
            transform: [
              { translate: [-3, 0, -3] }
            ],
            color: 'teal'
          }}
        />
        <Sphere
          dimHeight={2}
          dimWidth={2}
          dimDepth={2}
          style={{
            transform: [
              { translate: [1, 0, 1] }
            ],
            color: 'red'
          }}
        />

      </View>
    );
  }
}