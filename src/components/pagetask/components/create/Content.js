import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Content = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Title</Text>
                <FontAwesome name="star" size={30} color="#543310" style={styles.icon}/>
            </View>
            <TextInput 
                style={styles.input}
                placeholderTextColor="#af8f6f"
                placeholder= "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            />

            <View style={styles.icon2}>
            <FontAwesome name="plus" size={30} color="#543310"/>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#543310'}}>Categories</Text>
            </View>

            <View style={styles.icon2}>
            <FontAwesome name="calendar" size={30} color="#543310"/>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#543310'}}>Time</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 500, 
        color: '#F8F4E1'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20, // Ensure there is space between header and input
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#543310',
    },
    icon: {
        marginLeft: 'auto',
    },
    input: {
        width: 350, // Ensure input width is 100%
        height: 151,
        borderColor: '#E6DBCF',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        backgroundColor: '#E6DBCF'
    },

    icon2: {
        backgroundColor: '#E5DACE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    }, 


});

export default Content;
