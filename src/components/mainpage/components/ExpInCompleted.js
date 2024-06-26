// ExpInCompleted.js
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DataInCompleted } from '../../data/List';
import Task from './Task';

const ExpInCompleted = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Task item={item} navigation={navigation} />
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
    padding: 16,
    backgroundColor: '#26282B',
  },
});

export default ExpInCompleted;
