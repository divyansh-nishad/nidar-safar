
import { StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
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
import { Entypo } from '@expo/vector-icons';

const ReportCrash = () => {
    const nav = useNavigation()
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
                    <Entypo name="warning" size={64} color="#fff" />
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    style={[styles.btnCard]}
                    onPress={() => {
                        nav.navigate('Home')
                    }}
                >
                    <Text
                        style={styles.cardText}
                    >Report a Crash</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default ReportCrash

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
        backgroundColor: '#E31837',
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
