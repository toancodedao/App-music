import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {UserContext} from '../user/UserContext';

const Register = (props) => {
  const {navigation} = props;
  const [email, setEmail] = useState('phuoc');
  const [name, setName] = useState('hehee');
  const [password, setPassword] = useState('123');
  const { onRegister } = useContext(UserContext);
  const [confirmPassword, setConfirmPassword] = useState('123');

  const registers = async () => {
    if (password.localeCompare(confirmPassword) == 0) {
      try {
        const res = await onRegister(email, name, password);
        if (res == false) {
          ToastAndroid.showWithGravity(
            "Register failed",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
          );
        } else {
          ToastAndroid.showWithGravity(
            "Register success",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
          );
          navigation.navigate('Login');
        }
      } catch (e) {
        console.log('register error: ', e);
      }
    } else {
      ToastAndroid.showWithGravity(
        "password and confirmPassword did not match",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
      );
    }
  };

  return (
    <View style={styles.view2}>
      <Text style={styles.text1}>Create new accout</Text>
      <View style={styles.viewip}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.textip1}
          placeholder="Email"
        />
      </View>
      <View style={styles.viewip}>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.textip1}
          placeholder="Username"
        />
      </View>
      <View style={styles.viewip}>
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.textip1}
          placeholder="Password"
        />
      </View>
      <View style={styles.viewip}>
        <TextInput
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.textip1}
          placeholder="C.Password"
        />
      </View>
      <TouchableOpacity onPress={registers} style={styles.button}>
        <Text style={styles.text2}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.view3}>
        <TouchableOpacity style={styles.button2}>
          <Image
            style={styles.img}
            source={require('../img/facebook.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image
            style={styles.img}
            source={require('../img/google.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  textip1: {
    paddingStart: 20,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    backgroundColor: 'white',
  },
  view3: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img: {
    width: 30,
    height: 30,
  },
  text2: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    fontStyle: 'italic',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    marginTop: 40,
    height: 50,
    backgroundColor: '#FF8B3D',
  },
  text1: {
    marginTop: 20,
    marginLeft: 20,
    color: '#FF5E00',
    fontSize: 25,
    fontWeight: '700',
  },
  viewip: {
    marginTop: 20,
    borderRadius: 20,
    alignSelf: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'white',
  },
  view2: {
    borderRadius: 20,
    flex: 3,
    backgroundColor: '#EFEFEF',
  },
});
