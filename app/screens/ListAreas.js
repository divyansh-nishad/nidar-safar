import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

const ListAreas = () => {

    const nav = useNavigation()
    const [places, setPlaces] = useState()

    useEffect(() => {
        const getPlaces = async () => {
            const data = await getDocs(journey)
            setPlaces(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => {
                        nav.navigate('PlanJourney')
                    }}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />

                </TouchableOpacity>
                <Text
                    style={styles.navTitle}
                >
                    Red Zones in the Route
                </Text>
            </View>
            <ScrollView
                style={styles.vCards}
            >
                <TouchableOpacity
                    style={[styles.btnCard, {
                        backgroundColor: '#000'
                    }]}
                    onPress={() => {
                        nav.navigate('InJourney')
                    }}
                >
                    <Text
                        style={[styles.cardText, {
                            color: '#fff'
                        }]}
                    >
                        Start Journey
                    </Text>
                </TouchableOpacity>
                {
                    places.map((place) => {
                        return (
                            <TouchableOpacity
                                style={[styles.btnCard]}
                            // onPress={}
                            >
                                <Text
                                    style={styles.cardText}
                                >
                                    {
                                        place.place_name
                                    }
                                </Text>
                                <Text
                                    style={styles.cardTitle}
                                >
                                    {
                                        place.distance
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ListAreas

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
        // flexDirection: 'row',
        // alignItems: 'center',
        gap: 20,
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
