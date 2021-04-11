import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Components/Home';
import Profil from '../Components/Profil';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profil' component={Profil} />
    </Tab.Navigator>
  )
}

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

