import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Edit = (props) => {
    const {navigation}= props;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.v1}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image source={require('../img/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.t1}>Edit profile</Text>
                <View></View>
            </View>
            <View style={styles.v2}>
                <TextInput style={styles.ip1} placeholder='Username'>
                </TextInput>
                <TextInput style={styles.ip1} placeholder='Address'>
                </TextInput>

                <TouchableOpacity style={styles.bt1}>
                    <Text style={styles.t2}>Update profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default Edit

const styles = StyleSheet.create({
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
        paddingLeft: 20,
    },
    t1: {
        marginLeft: 120,
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