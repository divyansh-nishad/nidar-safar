import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AddFamily = () => {
    const nav = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => {
                        nav.navigate('Profile')
                    }}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />

                </TouchableOpacity>
                <Text
                    style={styles.navTitle}
                >
                    Family Members
                </Text>
            </View>
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    placeholder='Name'
                    // value={email}
                    // onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Mobile Number'
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
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                style={styles.vCards}
            >
                <TouchableOpacity
                    style={[styles.btnCard]}
                // onPress={}
                >
                    <Text
                        style={styles.cardText}
                    >
                        Name
                    </Text>
                    <Text
                        style={styles.cardTitle}
                    >
                        Mobile Number:
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default AddFamily

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
    },
    vCards: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
        // backgroundColor: '#fff',
    },
    btnCard: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 20,
        // flexDirection: 'row',
        // alignItems: 'center',
        gap: 20,
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
