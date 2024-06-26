import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';


const ListCompleted = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.categories}>{item.categories}</Text>
            <Text style={styles.list}>{item.list}</Text>
            <Text style={styles.time}>{item.due_time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#AF8F6F',
        padding: 10,
        marginBottom: 16,
        borderRadius: 30,
        width: 325,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#E5DACE'
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 8,
    },
    list: {
        flex: 1,
        fontSize: 16,
        color: '#E5DACE'
    },
    time: {
        fontSize: 14,
        color: '#E5DACE',
    },
    categories: {
        fontSize: 15,
        color: '#E5DACE',
    }
});

export default ListCompleted;