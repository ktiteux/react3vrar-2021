import React, { Component } from 'react';
import { asset, View } from 'react-360';

import Entity from 'Entity';


export default class TieFighter extends Component {
  render() {
    return (
      <View>
        <Entity
          source={{
            obj: asset('/star-wars-vader-tie-fighter-obj/star-wars-vader-tie-fighter.obj'),
            mtl: asset('/star-wars-vader-tie-fighter-obj/star-wars-vader-tie-fighter.mtl'),
          }}
          style={{
            transform: [
              { scaleX: 0.65 },
              { scaleY: .65 },
              { scaleZ: .65 },
              { rotateX: 35 },
              { rotateY: -30 },
              { rotateZ: 20 }
            ]
          }}
        />
      </View>
    );
  }
}