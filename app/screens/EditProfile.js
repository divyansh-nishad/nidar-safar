import { ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { push, ref } from 'firebase/database';
import { auth, rt } from '../firebase';

const EditProfile = () => {
    const nav = useNavigation()
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [vehicleNumber, setVehicleNumber] = useState('')
    const [relativeName, setRelativeName] = useState('')
    const [relativeMobile, setRelativeMobile] = useState('')
    const [relativeRelation, setRelativeRelation] = useState('')
    const [user, setUser] = useState()

    const editUser = async () => {
        const userRef = ref(rt, 'Users')
        const userData = {
            id: user.uid,
            name: name,
            email: user.email,
            mobile: mobile,
            vehicleType: vehicleType,
            vehicleNumber: vehicleNumber,
            relative: {
                name: relativeName,
                mobile: relativeMobile,
                relation: relativeRelation,
            }
        }
        await push(userRef, userData)
        ToastAndroid.show('Data added successfully!', ToastAndroid.SHORT);
        nav.navigate('Home')
    }

    useEffect(() => {
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
                    Edit Profile
                </Text>
            </View>
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    placeholder='Name'
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Mobile Number'
                    value={mobile}
                    onChangeText={(text) => setMobile(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Vehicle Type'
                    value={vehicleType}
                    onChangeText={text => setVehicleType(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Vehicle Number'
                    value={vehicleNumber}
                    onChangeText={text => setVehicleNumber(text)}
                    style={styles.input}
                />
            </View>
            <View
                style={styles.inputContainer}
            >
                <Text
                    style={styles.header}
                >
                    Relative's Information
                </Text>
                <TextInput
                    placeholder='Relative Name'
                    value={relativeName}
                    onChangeText={(text) => setRelativeName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Relative Mobile Number'
                    value={relativeMobile}
                    onChangeText={(text) => setRelativeMobile(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Relation with the relative'
                    value={relativeRelation}
                    onChangeText={text => setRelativeRelation(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={editUser}
                    style={styles.btn}
                >
                    <Text
                        style={styles.btnText}
                    >
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditProfile

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
        width: '100%',
        paddingBottom: 20
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
    header: {
        fontWeight: 'bold'
    }
})
