import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ExpInCompleted from './components/ExpInCompleted';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lupa.Inc</Text>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#543310" style={styles.icon} />
        <TextInput style={styles.search} placeholder="Search by task" />
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.YourTask}>Your Task</Text>
        <ExpInCompleted navigation={navigation} style={styles.task} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26282B',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F5F7F8',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  taskContainer: {
    flex: 2,
    // width: '100%',
    // paddingHorizontal: 20,
    marginTop: 10,
  },
  YourTask: {
    fontSize: 25,
    color: '#5F85DB',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10
   
  },
  task: {
    marginTop: 20,
  },
});

export default Home;
