import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const DateComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.todayNowContainer}>
                <Text style={styles.todayNowText}>Today</Text>
                <Text style={styles.todayNowText}>Now</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Monday, 3 June</Text>
                <Text style={styles.dateText}>11.24 AM</Text>
            </View>
            <TextInput style={styles.search}>
                <FontAwesome name="search" size={20} color="#543310" style={styles.icon}/>
                <Text style={{fontsize: 15, color: '#AF8F6F'}}> Search by notes and text </Text>
                </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    todayNowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', // Ensure the container takes full width
        padding: 5, // Adjust padding as needed
        paddingHorizontal: 20,
    },
    todayNowText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#543310',
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', // Ensure the container takes full width
        paddingHorizontal: 20, // Adjust padding as needed
    },
    dateText: {
        fontSize: 15,
        fontWeight: 'center',
        color: '#AF8F6F',
        textAlign: 'justify',
    },
    search: {
        width: 325,
        height: 40,
        backgroundColor: '#E5DACE',
        borderRadius: 30,
        paddingHorizontal: 20,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 15,

    }
});

export default DateComponent;
