import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AccidentAreas = () => {
    const nav = useNavigation()
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
                    Red Zones in the Route
                </Text>
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
                        Place Name
                    </Text>
                    <Text
                        style={styles.cardTitle}
                    >
                        Severity: High
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnCard]}
                // onPress={}
                >
                    <Text
                        style={styles.cardText}
                    >
                        Place Name
                    </Text>
                    <Text
                        style={styles.cardTitle}
                    >
                        Severity: High
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnCard]}
                // onPress={}
                >
                    <Text
                        style={styles.cardText}
                    >
                        Place Name
                    </Text>
                    <Text
                        style={styles.cardTitle}
                    >
                        Severity: High
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default AccidentAreas

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
        gap: 10,
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
