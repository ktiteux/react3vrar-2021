import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH / 2.8);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View
      style={styles.container}
      key={index}
      onClick={() => alert(` nom du film = ${item.title}`)}
    >
      <Image
        source={{ uri: item.img }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.details}>{item.details}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}

export default CarouselCardItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    backgroundColor: 'white'
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.2
  },
  title: {
    color: 'teal',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  details: {
    fontSize: 16,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
  }
})