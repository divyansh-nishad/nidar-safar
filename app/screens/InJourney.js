
import { StatusBar, StyleSheet, Text, ToastAndroid, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// import Animated, {
//     useSharedValue,
//     withTiming,
//     useAnimatedStyle,
//     Easing,
// } from 'react-native-reanimated';
// App.js
import { Easing } from 'react-native-reanimated'
import { MotiView } from 'moti'
import { FontAwesome5 } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { push, ref } from 'firebase/database'
import { auth, rt } from '../firebase'
import RNShake from 'react-native-shake';
import call from 'react-native-phone-call'
// import * as Speech from 'expo-speech';

const InJourney = () => {
    const nav = useNavigation()
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [user, setUser] = useState()


    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = 'Report a Crash'
    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();

        RNShake.addListener(() => {
            const args = {
                number: '112',
                prompt: false,
                skipCanOpen: true,
            }
            call(args).catch(console.error)
            const reportRef = ref(rt, 'reports')
            const report = {
                location: location,
                vehicleType: user.vehicleType,
                vehicleNumber: user.vehicleNumber,
                userName: user.email
            }
            push(reportRef, report)
            // ToastAndroid.show('Reported successfully!', ToastAndroid.SHORT);
            // nav.navigate('Home')
        })

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
            }
        })
        return unsubscribe
    }, []);

    return (
        <View
            style={styles.container}
        // onPress={() => nav.navigate('BusJourney')}
        >
            <View style={styles.top}>
                <View style={styles.circle}>
                    {[...Array(3).keys()].map((index) => {
                        return (
                            <MotiView
                                from={{
                                    opacity: 0.7,
                                    scale: 1
                                }}
                                animate={{
                                    opacity: 0,
                                    scale: 4
                                }}
                                transition={{
                                    type: 'timing',
                                    duration: 2000,
                                    easing: Easing.out(Easing.ease),
                                    delay: 400 * index,
                                    repeatReverse: false,
                                    loop: true,
                                }}
                                key={index}
                                style={[StyleSheet.absoluteFill, styles.circle]}
                            />
                        )
                    })}
                    <FontAwesome5 name="location-arrow" size={64} color="#fff" />
                </View>
            </View>
            {/* <View style={styles.bottom}>
                <TouchableOpacity
                    style={[styles.btnCard]}
                    onPress={() => {
                        speak()
                    }}
                >
                    <Text
                        style={styles.cardText}
                    >
                        On You Way
                    </Text>
                </TouchableOpacity>
            </View> */}
            <StatusBar style="auto" />
        </View>
    )
}

export default InJourney

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',

    },
    top: {
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        padding: 20,
        backgroundColor: '#000',
        borderRadius: 100,
    },
    bottom: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    btnCard: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#E31837',
        padding: 20,
        marginBottom: 20,
        // flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})
