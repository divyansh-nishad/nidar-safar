import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity
                    style={styles.back}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {

    },
    back: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 50,
    }
})
