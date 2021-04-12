import React, { Component } from 'react';
import { asset, View } from 'react-360';

import Entity from 'Entity';

export default class Xwing extends Component {
  render() {
    return (
      <View>
        <Entity
          source={{
            obj: asset('/star-wars-x-wing-obj/star-wars-x-wing.obj'),
            mtl: asset('/star-wars-x-wing-obj/star-wars-x-wing.mtl'),
          }}
          style={{
            transform: [
              { scaleX: 0.25 },
              { scaleY: .25 },
              { scaleZ: .25 },
              { rotateX: 35 },
              { rotateY: 30 },
              { rotateZ: 20 }
            ]
          }}
        />
      </View>
    );
  }
}