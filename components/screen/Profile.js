import {  StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = (props) => {
    const {navigation}= props;
    return (
        <View style={styles.container}>
            <View style={styles.v1}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.avt} source={require('../img/avt.png')}></Image>
                    <TouchableOpacity style={styles.bt}>
                        <Image style={styles.camera} source={require('../img/camera.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.v2}>
                    <Text style={styles.username}>Do Minh Toan</Text>
                    <Text style={styles.address}>147-Hoang Dieu</Text>
                </View>
                <View style={styles.v3}>
                    <TouchableOpacity style={styles.bt1} placeholder='Old Password' onPress={()=>  navigation.navigate('Edit')}>
                        <Image source={require('../img/user.png')}></Image>
                        <Text style={styles.t1}>Edit profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt1} placeholder='Old Password' onPress={()=>  navigation.navigate('ChangePW')}>
                        <Image source={require('../img/cpw.png')}></Image>
                        <Text style={styles.t1}>Change Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt1} placeholder='Old Password'>
                        <Image source={require('../img/down.png')}></Image>
                        <Text style={styles.t1}>Download</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt1} placeholder='Old Password'>
                        <Image style ={styles.icon} source={require('../img/heart.png')}></Image>
                        <Text style={styles.t1}>My favorite</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bt1} placeholder='Old Password' 
                    // onPress={()=>  navigation.navigate('Registerrrr', { screen: 'UserNavigation' })}
                    >
                        <Image style ={styles.icon} source={require('../img/logout.png')}></Image>
                        <Text style={styles.t1}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#FF781F',
    },
    v1: {
        marginTop: 150,
        backgroundColor: '#F8F8F8',
        width: '100%',
        height: 750,
        borderRadius: 30,
    },
    avt: {
        width: 150,
        height: 150,
        position: 'absolute',
        borderRadius: 70,
        top: -100,
    },
    bt: {
        position: 'absolute',
        right: 120,
        backgroundColor: '#FFFFFF',
        width: 40,
        height: 40,
        padding: 5,
        borderRadius: 20,
    },

    bt1: {
        marginBottom: 10,
        width: 350,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        paddingTop: 8,
    },
    v2: {
        marginTop: 60,
        alignItems: 'center',
        marginBottom: 20,
    },
    username: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 29,
        color: '#000000'
    },
    address: {
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 33,
        color: '#838282',
    },
    t1:{
        color: '#838282',
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 33,
        marginLeft: 20,
    },
     v3:{
        alignItems: 'center',
     },
     icon:{
        marginTop: 5,
    }
})