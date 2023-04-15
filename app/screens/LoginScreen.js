import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    placeholder='email'
                    // value={ }
                    // onChangeText={ }
                    style={styles.input}
                />
                <TextInput
                    placeholder='password'
                    // value={ }
                    // onChangeText={ }
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.btn}
                >
                    <Text
                        style={styles.btnText}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
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
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    btnContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    btn: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    btnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    btnOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})
