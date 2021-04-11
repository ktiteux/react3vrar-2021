import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import CarouselCards from '../Carousel/CarouselCards';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CarouselCards />
      </SafeAreaView >
    )
  }
}
