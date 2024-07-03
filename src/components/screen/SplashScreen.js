import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const handleButtonPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <View style={styles.container2}> 
                <Text style={styles.text}>Lupa.Inc</Text>
            </View>
            <View style={styles.container3}> 
                <Image source={require("../../../assets/img/book.png")} style={styles.img}/>
            </View> 
            <View style={styles.container4}>       
                <Text style={styles.slogan}>Productivity</Text>
                <Text style={styles.sloganSub}>in the palm of your hand</Text>
            </View>
            <View style={styles.container5}>
                <Text style={styles.intro}>
                    Welcome to our Notes and Tasks app, where productivity meets convenience. 
                    With powerful features designed to simplify your daily life, our app ensures all 
                    your ideas, tasks, and notes are neatly stored and easily accessible anytime, 
                    anywhere. Be more organized and achieve more with Lupa.Inc.
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Text style={styles.buttonText}>Let's Go</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F7F8',
        padding: 20,
        
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
        width: 202,
        height: 200,
        borderRadius: 101,
    },
    container4: {
        alignItems: 'center',
        marginBottom: 50,
    },
    slogan: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 35,
        color: "#5F85DB",
    },
    sloganSub: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: "#90B8F8",
    },
    container5: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    intro: {
        textAlign: 'center',
        fontSize: 16,
        color: "#90B8F8",
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#5F85DB',
        paddingVertical: 10,
        paddingHorizontal: 70,
        borderRadius: 30,
    },
    buttonText: {
        color: '#F5F7F8',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default SplashScreen;
