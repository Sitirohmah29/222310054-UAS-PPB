import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DataInCompleted } from '../../../data/List';
import TaskList from './TaskList';



const TaskDetailScreen = () => {
  return (
    <View style={styles.container}>
      <TaskList data={DataInCompleted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 300,
    padding: 10
  },
});

export default TaskDetailScreen;
