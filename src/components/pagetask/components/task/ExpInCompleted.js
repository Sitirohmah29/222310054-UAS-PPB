// ExpInCompleted.js
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DataInCompleted } from '../../data/List';
import Task from './Task';

const ExpInCompleted = () => {
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
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
});

export default ExpInCompleted;
