import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ExpList from './ExpList';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.search}>
        <FontAwesome name="search" size={20} color="#543310" />
        <Text style={{ fontSize: 15, color: '#26282B' }}> Search By Task</Text>
      </TextInput>
      <View style={styles.list}>
        <ExpList navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  list: {
    flex: 2,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#543310',
    backgroundColor: '#EEEDEB',
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
    marginTop: 20,
  },
});

export default Home;
