import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import List from './components/modules/ExpList';
import ListItem from './components/task/List';



const Task = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <TextInput style={styles.search}>
      <FontAwesome name="search" size={20} color="#543310" />
      <Text style={{fontsize: 15, color: '#26282B'}}> Search By Task</Text>
    </TextInput>
    <View style={styles.list}>
    <List ListInCompleted={ListItem}/>
    </View>
</View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center', // Center align items horizontally
    paddingTop: 50, // Ensure content starts a bit lower than the top
    paddingBottom: 20,
  },
  list: {
    flex: 2,
    
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#543310',
    backgroundColor: '#EEEDEB'
},
  search: {
    width: 325,
    height: 40,
    backgroundColor: '#F5F7F8',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 15,
},

});

export default Task;