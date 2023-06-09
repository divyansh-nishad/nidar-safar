import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { auth, rt } from '../firebase';
import { onValue, ref } from 'firebase/database';

const HomeScreen = () => {

    const [user, setUser] = useState()
    const [users, setUsers] = useState()
    const [currentUser, setCurrentUser] = useState()

    const nav = useNavigation()

    useEffect(() => {
        // const getUser = async () => {
        //     const userRef = ref(rt, 'Users')
        //     await onValue(userRef, (snapshot) => {
        //         const data = snapshot.val()
        //         let users = []
        //         for (let id in data) {
        //             users.push({ id, ...data[id] })
        //         }
        //         setUsers(users)
        //         let currentUser = {}
        //         for (let id in users) {
        //             if (users[id].id === user.uid) {
        //                 currentUser = users[id]
        //             }
        //         }
        //         setCurrentUser(currentUser)
        //     })
        // }
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
            }
        })
        return unsubscribe
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.titleContianer}>
                    <Text style={styles.titleGreet}>Welcome</Text>
                    <Text style={styles.titleUsername}>
                        {
                            currentUser ? user.email : 'User'
                        }
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.profile}
                    onPress={() => {
                        nav.navigate('Profile')
                    }}
                >
                    <Feather name="user" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal={true}
                style={styles.hCards}
            >
                <Image
                    source={require('../Images/Emergency.png')}
                    style={styles.img}
                />
                <Image
                    source={require('../Images/Emergency.png')}
                    style={styles.img}
                />
                <Image
                    source={require('../Images/Emergency.png')}
                    style={styles.img}
                />
            </ScrollView>
            <ScrollView
                style={styles.vCards}
            >
                <TouchableOpacity
                    style={[styles.btnCard]}
                    onPress={() => {
                        nav.navigate('PlanJourney')
                    }}
                >
                    <MaterialIcons name="place" size={24} color="black" />
                    <Text
                        style={styles.cardText}
                    >Plan Your Journey</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnCard]}
                    onPress={() => {
                        nav.navigate('AccidentAreas')
                    }}
                >
                    <AntDesign name="eye" size={24} color="black" />
                    <Text
                        style={styles.cardText}
                    >View Accident Prone Areas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnCard, {
                        backgroundColor: '#E31837'
                    }]}
                    onPress={() => {
                        nav.navigate('ReportCrash')
                    }}
                >
                    <FontAwesome5 name="car-crash" size={24} color="white" />
                    <Text
                        style={styles.cardText}
                    >Report Crash</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        paddingTop: 20,
        alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: 20,
    },
    nav: {
        width: '100%',
        height: 70,
        // backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        // elevation: 5,
        marginBottom: 50,
        paddingHorizontal: 20,
    },
    titleContianer: {

    },
    titleGreet: {
        fontSize: 20,
    },
    titleUsername: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profile: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    hCards: {
        width: '100%',
        // height: 100,
        // flex: 1,
        // flexDirection: 'row',
        // gap: 10,
        // backgroundColor: 'white',
        paddingLeft: 20,
        marginBottom: 50,
    },
    img: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginRight: 20,
    },
    vCards: {
        width: '100%',
        paddingHorizontal: 20,
        // backgroundColor: '#fff',
    },
    btnCard: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
