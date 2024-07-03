import React, { useState } from 'react';
import { Checkbox } from 'expo-checkbox';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSignIn = () => {
        // Predefined credentials
        const predefinedEmail = '';
        const predefinedPassword = '';

        if (email === predefinedEmail && password === predefinedPassword) {
            // Navigate to the next screen (e.g., Home screen)
            navigation.navigate('Home'); // Adjust 'Home' to your target screen's name
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.text}>Lupa.Inc</Text>
            </View>
            <View style={styles.container4}>
                <Text style={styles.sloganSub}>Welcome Back!</Text>
            </View>
            <View style={styles.container3}>
                <Image source={require("../../../../assets/img/icon.png")} style={styles.img}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter your email" 
                    keyboardType="email-address" 
                    autoCapitalize="none" 
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter your password" 
                    secureTextEntry={true} 
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.checkboxContainer}>
                    <Checkbox 
                        style={styles.checkbox} 
                        value={isChecked} 
                        onValueChange={handleCheckboxChange} 
                        color={isChecked ? '#F5F7F8' : undefined}
                    /> 
                    <Text style={styles.termsText}>Remember my account</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>or sign in with</Text>
            </View>
            <View style={styles.container5}>
                <Image source={require("../../../../assets/img/fb.jpeg")} style={styles.logo}/>
                <Image source={require("../../../../assets/img/google.jpeg")} style={styles.logo}/>
                <Image source={require("../../../../assets/img/apple.jpeg")} style={styles.logo}/>
            </View>
            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>
                    Don't have an account? 
                    <Text style={styles.signInLinkText} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
        padding: 30,
    },
    container2: {
        marginBottom: 50,
    },
    text: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#26282B',
    },
    container3: {
        marginBottom: 50,
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    container4: {
        alignItems: 'center',
        marginBottom: 30,
    },
    sloganSub: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: "#5F85DB",
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
        alignItems: 'center',
    },
    label: {
        width: 260,
        fontSize: 14,
        color: "#26282B",
        marginBottom: 5,
    },
    input: {
        width: 260,
        height: 30,
        backgroundColor: '#F5F7F8',
        borderRadius: 30,
        paddingHorizontal: 10,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#26282B',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '78%',
    },
    checkbox: {
        width: 15,
        height: 15,
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#26282B',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedBox: {
        width: 15,
        height: 15,
        backgroundColor: '#26282B',
        borderRadius: 0,
    },
    termsText: {
        fontSize: 15,
        color: "#26282B",
        textAlign: 'center',
        marginTop: 3,
        marginRight: 60,
        flex: 1,
    },
    linkText: {
        color: "#F5F7F8",
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#5F85DB',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 30,
    },
    buttonText: {
        color: '#F5F7F8',
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    orText: {
        marginTop: 10,
        fontSize: 16,
        color: '#F5F7F8',
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
        marginLeft: 10,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    signInContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    signInText: {
        fontSize: 16,
        color: '#26282B',
    },
    signInLinkText: {
        fontWeight: 'bold',
        color: '#5F85DB',
        textDecorationLine: 'underline',
    }
});

export default SignIn;
