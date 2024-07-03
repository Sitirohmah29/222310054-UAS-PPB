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
    backgroundColor: '#EEEDEB',
    padding: 10,
    marginBottom: 20,
    borderRadius: 30,
    width: 350,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'reguler',
    marginBottom: 8,
    color: '#26282B',
    marginLeft: 10,
  },
});

export default Task;
