import React, { useState } from 'react';
import { Checkbox } from 'expo-checkbox';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUp = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.container2}> 
                <Text style={styles.text}>Lupa.Inc</Text>
            </View>
            <View style={styles.container3}> 
                <Image source={require("../../../../assets/img/book.png")} style={styles.img}/>
            </View> 
            <View style={styles.container4}>       
                <Text style={styles.sloganSub}>Let's get started!</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} placeholder="Enter your username"/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none"/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true}/>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.checkboxContainer}>
                    <Checkbox 
                        style={styles.checkbox} 
                        value={isChecked} 
                        onValueChange={setIsChecked} 
                        color={isChecked ? '#F5F7F8' : undefined}
                    />
                    <Text style={styles.termsText}>
                        I agree to the <Text style={styles.linkText}>Terms and Conditions</Text> and <Text style={styles.linkText}>Privacy Policy</Text>.
                    </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>or sign up with</Text>
            </View>
            <View style={styles.container5}> 
                <Image source={require("../../../../assets/img/fb.jpeg")} style={styles.logo}/>
                <Image source={require("../../../../assets/img/google.jpeg")} style={styles.logo}/>
                <Image source={require("../../../../assets/img/apple.jpeg")} style={styles.logo}/>
            </View> 
            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>
                    Already have an account? 
                    <Text style={styles.signInLinkText} onPress={() => navigation.navigate('SignIn')}> Sign In</Text>
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
        color: '#1D242B',
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
        color:'#5F85DB'
    },
    sloganSub: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: "#5F85DB",
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
        alignItems: 'center',
        borderColor:'#737E88'
        
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
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#26282B',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedBox: {
        width: 15,
        height: 15,
        backgroundColor: '#F5F7F8',
        borderRadius: 0,
    },
    termsText: {
        fontSize: 15,
        color: "#26282B",
        textAlign: 'center',
        marginTop: 10,
        flex: 1,
    },
    linkText: {
        color: "#90B8F8",
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
        marginRight: 30,
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
        borderColor:'#26282B'
    },
    signInLinkText: {
        fontWeight: 'bold',
        color: '#5F85DB',
        textDecorationLine: 'underline',
    }
});

export default SignUp;
