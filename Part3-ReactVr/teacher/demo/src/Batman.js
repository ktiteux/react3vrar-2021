import React, { Component } from 'react';

import { asset, View, Model, Sphere } from 'react-vr';

export default class Batman extends Component {
  render() {
    return (
      <Model
        source={{
          obj: asset('/Batman/batman.obj'),
          mtl: asset('/Batman/batman.mtl')
        }}
        style={{
          position: 'absolute',
          transform: [
            { translate: [-4.50, 2.40, -5.6] },
            { scale: 1 },
            { rotateX: 35 },
            { rotateY: 55 },
            { rotateZ: 35 }]
        }}
      />
    );
  }
}