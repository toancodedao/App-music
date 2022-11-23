import React from 'react';
import {StyleSheet, View, StatusBar ,Text} from 'react-native';
import PlayerScreen from './src/PlayerScreen';

import AppNavigation from './components/navigation/AppNavigation';
import {UserContextProvider} from './components/user/UserContext';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar barStyle="light-content" backgroundColor="#030303" />
    //   <PlayerScreen />
    // </View>
    <UserContextProvider>
      <AppNavigation />
    </UserContextProvider>

  );
}


