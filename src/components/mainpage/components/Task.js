import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = ({ item, navigation }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity 
        style={styles.btn}
        onPress={() => navigation.navigate('TaskDetailScreen', { item })}
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },
  btn:{
    backgroundColor: '#F5F7F8',
    padding: 10,
    marginBottom: 10,
    borderRadius: 30,
    width: 325,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#26282B',
    marginLeft: 10
  },
});

export default Task;
