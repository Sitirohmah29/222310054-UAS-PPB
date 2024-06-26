import Checkbox from 'react-native-check-box';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const ListInCompleted = ({ item }) => {
    return (

        <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.categories}>{item.categories}</Text>
            <View style={styles.taskContainer}>
                <Checkbox value={true} checkBoxColor='#E5DACE' />
                <Text style={styles.list}>{item.list}</Text>
                <Text style={styles.time}>{item.due_time}</Text>
            </View>
            {item.list_1 && (
                <View style={styles.taskContainer}>
                    <Checkbox value={true} checkBoxColor='#E5DACE' />
                    <Text style={styles.list}>{item.list_1}</Text>
                    <Text style={styles.time}>{item.due_time}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#F5F7F8',
        padding: 16,
        marginBottom: 16,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
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

export default ListInCompleted;