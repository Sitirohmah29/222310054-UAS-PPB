import React from 'react';
import { StyleSheet, View } from 'react-native'; 
import TaskList from './TaskList';
import { DataList } from '../data/List';

const TaskDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TaskList data={DataList} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default TaskDetailScreen;
