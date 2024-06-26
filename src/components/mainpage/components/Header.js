import React from 'react';
import { SafeAreaView } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../../../assets/img/profile.jpeg")} style={styles.img}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Lubar Amien</Text>
                <Text style={styles.text1}>Today, 3 june</Text>
            </View>
            <FontAwesome name="bell" size={30} color="#543310" style={styles.icon}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingVertical:10
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 20,
    },
    textContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#543310'
    },
    icon: {
        marginLeft: 'auto',
    },
    text1:{
        fontsize: 15,
        color:'#AF8F6F',
        fontWeight: 'bold',
    }
});

export default Header;

