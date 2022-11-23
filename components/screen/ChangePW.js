import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChangePW = (props) => {
    const {navigation} = props;
    const [hidden, setHidden] = useState(true);
    const [hidden1, setHidden1] = useState(true);
    const [hidden2, setHidden2] = useState(true);

    const hiddenPassWord = () => {
        setHidden(!hidden)
    }
    const hiddenPassWord1 = () => {
        setHidden1(!hidden1)
    }
    const hiddenPassWord2 = () => {
        setHidden2(!hidden2)
    }
    const ConfirmPassWord = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Update complete",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
            
          );
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.v1}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image source={require('../img/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.t1}>Change Password</Text>
                <View></View>
            </View>
            <View style={styles.v2}>
                <View>
                    <TextInput style={styles.ip1} placeholder='Old Password' secureTextEntry={hidden}>
                    </TextInput>
                    <Image style={styles.h1} source={require('../img/lock.png')}></Image>
                    <TouchableOpacity onPress={(hiddenPassWord)} style={styles.h2}>
                        {
                            hidden ?
                                <Ionicons
                                    style={styles.icon}
                                    name='eye'
                                    size={25}
                                    color={'orange'} />
                                :
                                <Ionicons
                                    style={styles.icon}
                                    name='eye-off'
                                    size={25}
                                    color={'orange'} />
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    <TextInput style={styles.ip1} placeholder='New Password' secureTextEntry={hidden1}>
                    </TextInput>
                    <Image style={styles.h1} source={require('../img/lock.png')}></Image>
                    <TouchableOpacity onPress={(hiddenPassWord1)} style={styles.h2}>
                        {
                            hidden ?
                                <Ionicons
                                    style={styles.icon}
                                    name='eye'
                                    size={25}
                                    color={'orange'} />
                                :
                                <Ionicons
                                    style={styles.icon}
                                    name='eye-off'
                                    size={25}
                                    color={'orange'} />
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    <TextInput style={styles.ip1} placeholder='Confirm Password' secureTextEntry={hidden2}>
                    </TextInput>
                    <Image style={styles.h1} source={require('../img/lock.png')}></Image>
                    <TouchableOpacity onPress={(hiddenPassWord2)} style={styles.h2}>
                        {
                            hidden ?
                                <Ionicons
                                    style={styles.icon}
                                    name='eye'
                                    size={25}
                                    color={'orange'} />
                                :
                                <Ionicons
                                    style={styles.icon}
                                    name='eye-off'
                                    size={25}
                                    color={'orange'} />
                        }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.bt1} onPress={ConfirmPassWord}>
                    <Text style={styles.t2}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ChangePW

const styles = StyleSheet.create({
    h1: {
        position: 'absolute',
        left: 20,
        top: 15,
    },
    h2: {
        position: 'absolute',
        right: 40,
        top: 15,
    },
    t2: {
        fontWeight: '400',
        color: 'white',
        fontSize: 20,
    },
    bt1: {
        backgroundColor: '#FF8B3D',
        width: 350,
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        paddingTop: 15,
    },
    v2: {
        marginLeft: 20,
        marginTop: 20,

    },
    ip1: {
        marginBottom: 30,
        width: 350,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingLeft: 50,
    },
    t1: {
        marginLeft: 100,
        color: '#FF5E00',
        fontSize: 24,
        fontWeight: '500',
    },
    v1: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 5,
    },
    container: {
        backgroundColor: '#EFEFEF',
        flex: 1,
    },
})