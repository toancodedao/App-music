
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Profile from './Profile';
import Edit from './Edit';
import ChangePW from './ChangePW';



const ProfileNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     
      <Stack.Screen name="Profileee" component={Profile} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="ChangePW" component={ChangePW} />


    </Stack.Navigator>
  )
}

export default ProfileNavigation

