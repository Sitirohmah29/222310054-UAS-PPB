 import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DataCompleted } from '../../../data/List';
import TaskDetailScreen from '../task/TaskDetailScreen';

const ExpCompleted = (navigation) => {
    const renderItem = ({ item }) => (
        <TaskDetailScreen item={item} navigation={navigation} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DataCompleted}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F8F4E1',
    },
});

export default ExpCompleted;