import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DataInCompleted } from '../../../data/List';
import ListItem from '../task/List';

const List = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DataInCompleted}
                renderItem={({ item }) => <ListItem item={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});

export default List;