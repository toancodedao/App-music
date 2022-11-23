import React from 'react';
import {  StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeNavigation from '../screen/HomeNavigation';
import ProfileNavigation from '../screen/ProfileNavigation';
import Music from '../screen/Music';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProductNavigation = props => {
  const {navigation} = props;
  return (
    <Tab.Navigator
        screenOptions={{headerShown: false, activeTintColor: '#FF781F'}}
        initialRouteName="Feed">
        <Tab.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Ionicons
              name="home"
               color={color} 
               size={size} />
            ),
          }}
          />
          <Tab.Screen
          name="Music"
          component={Music}
          options={{
            tabBarLabel: 'Music',
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name="ios-play"
                color={"#FF781F"}
                size={30}
                style={{}}
              />
            ),
          }}
          />
          <Tab.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Music',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5
                name="user-alt"
                color={color}
                size={size}
              />
            ),
          }}
        />
</Tab.Navigator>
  )}
  

export default ProductNavigation;
