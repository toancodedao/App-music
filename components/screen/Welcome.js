import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Welcome = props => {
  const {navigation} = props;
  setTimeout(() => {
    // navigate('Home');
    navigation.navigate('Login');
  }, 2000);
  return (
    <View style={styles.container}>
      <Image style={styles.hinhnen} source={require('../img/main.jpg')}></Image>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  hinhnen: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
});
