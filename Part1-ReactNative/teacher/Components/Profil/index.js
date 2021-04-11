import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function Profil() {
  return (
    <View style={styles.container}>
      <View style={styles.containerIndividu}>
        <Image style={styles.img} source={{ uri: 'https://cloudinary-a.akamaihd.net/hopwork/image/upload/h_440,w_440,c_thumb,g_face,z_0.4,f_auto/v8rrjp1p3fwbhsxdkoxh.webp' }} />
        <View>
          <Text style={[styles.red, styles.strong]}>Prénom, nom</Text>
          <Text style={styles.civilites}>Tel :</Text>
          <Text style={styles.civilites}>Mail :</Text>
        </View>
      </View>
      <View>
        <Text style={styles.titleDetails}>Titre</Text>
        <Text style={styles.details}>details 1</Text>
        <Text style={styles.details}>details 2</Text>
        <Text style={styles.details}>details 3</Text>
      </View>
    </View >
  );
}