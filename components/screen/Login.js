import {
  StyleSheet, Text, View, Image, TextInput,
  Dimensions, TouchableOpacity,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { UserContext } from '../user/UserContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = (props) => {
  const {navigation} = props;
  const [email, setEmail] = useState('taone');
  const [password, setPassword] = useState('123');
  const { onLogin } = useContext(UserContext);
  const [hidden, setHidden] = useState(true);

  const logins = async () => {
    try {
      const res = await onLogin(email, password);
      if (res == false) {
        ToastAndroid.showWithGravity(
          "Login failed",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    } catch (e) {
      console.log('login error: ', e);
    }
  };
  const hiddenPassWord = () => {
    setHidden(!hidden)
  }
  return (
    <View style={styles.view2}>
      <Text style={styles.text1}>Log in</Text>
      <View style={styles.viewip}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.textip}
          placeholder='Email' />
      </View>
      <View style={styles.viewip}>
        <TextInput
          secureTextEntry={hidden}
          value={password}
          onChangeText={setPassword}
          style={styles.textip}
          placeholder='Password' />
        <TouchableOpacity
          onPress={(hiddenPassWord)}
          style={styles.button3}>
          {
            hidden ?
              <Ionicons
                style={styles.icon}
                name='eye'
                size={25}
                color={'gray'} />
              :
              <Ionicons
                style={styles.icon}
                name='eye-off'
                size={25}
                color={'gray'} />
          }
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={(logins)}
        style={styles.button}>
        <Text style={styles.text2}>SIGN IN</Text>
      </TouchableOpacity>
      <View style={styles.viewend}>
        <Text style={styles.text5}>Don’t have an accout?</Text>
        <TouchableOpacity
         onPress={() => {
          navigation.navigate('Register')
        }}
        >
          <Text style={styles.text4}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button3: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flex: 1,
  },
  icon: {
      marginRight: 0,
  },
  text5: {
      color: 'black',
      fontSize: 15,
      fontWeight: '200',

  },
  text4: {
      color: '#FF781F',
      fontSize: 15,
      fontWeight: '200',

  },
  viewend: {
      flexDirection: 'row',
      marginTop: 56,
      justifyContent: 'center',
      alignItems: 'center',
  },
  button2: {
      marginLeft: 30,
  },
  text3: {
      fontSize: 15,
      fontWeight: '200',
      color: '#888383',
      marginTop: 22,
  },
  textip: {
      width: '80%',
      paddingStart: 20,
  },
  text2: {
      fontSize: 20,
      color: 'white',
      fontWeight: '400',
  },
  button: {
      borderRadius: 20,
      marginTop: 29,
      alignSelf: 'center',
      width: '90%',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF8B3D',
  },
  text1: {
      marginTop: 30,
      marginLeft: 30,
      fontSize: 25,
      fontWeight: '700',
      color: '#FF781F',
  },
  viewip: {
      borderRadius: 20,
      marginTop: 21,
      width: '90%',
      backgroundColor: 'white',
      alignSelf: 'center',
      flexDirection: 'row',
  },
  view2: {
      borderRadius: 20,
      flex: 1.8,
      backgroundColor: '#EFEFEF'
  },
})
