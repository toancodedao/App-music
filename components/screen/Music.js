import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import PlayerScreen from '../../src/PlayerScreen';

const Music = () => {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#030303" />
          <PlayerScreen />
        </View>
      );
    }

export default Music

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#030303',
      // alignItems: 'center',
      justifyContent: 'center',
    },
  });