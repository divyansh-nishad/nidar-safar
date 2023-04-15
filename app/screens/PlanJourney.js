import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlanJourney = () => {
    const nav = useNavigation()

    const [source, setSource] = useState('')
    const [destination, setDestination] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => {
                        nav.navigate('Home')
                    }}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />

                </TouchableOpacity>
                <Text
                    style={styles.navTitle}
                >
                    Plan Journey
                </Text>
            </View>
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    placeholder='Source'
                    // value={email}
                    // onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Destination'
                    // value={password}
                    // onChangeText={text => setPassword(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={() => {
                        nav.navigate('ListAreas')
                    }}
                    style={styles.btn}
                >
                    <Text
                        style={styles.btnText}
                    >
                        Go
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PlanJourney

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // width: '100%',
    },
    nav: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    navTitle: {
        fontWeight: 'bold',
    },
    back: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    inputContainer: {
        paddingHorizontal: 20,
        width: '100%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    btnContainer: {
        paddingHorizontal: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    btn: {
        backgroundColor: '#000',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    }
})
