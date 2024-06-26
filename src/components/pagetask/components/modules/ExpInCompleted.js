import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DataInCompleted } from '../../../data/List';
import ListInCompleted from '../task/ListInCompleted';




const ExpInCompleted = () => {
    const renderItem = ({ item }) => (
        <ListInCompleted item={item} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DataInCompleted}
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

export default ExpInCompleted;