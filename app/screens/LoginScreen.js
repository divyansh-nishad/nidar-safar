import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nav = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                nav.navigate('Home')
            }
        })
        return unsubscribe
    }, [])


    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("Registered: ", user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, " | ", errorMessage)
            });
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("Logged In: ", user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, " | ", errorMessage)
            });
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
        // behavior="padding"
        >
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    placeholder='email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.btn}
                >
                    <Text
                        style={styles.btnText}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleRegister}
                    style={[styles.btn, styles.btnOutline]}
                >
                    <Text
                        style={styles.btnOutlineText}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    btnOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#000',
        borderWidth: 2,
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    btnOutlineText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 16,
    },
})
