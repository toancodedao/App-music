import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from './Home';
import Music from './Music';
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homeeee" component={Home} />
      <Stack.Screen name="Musicc" component={Music} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
