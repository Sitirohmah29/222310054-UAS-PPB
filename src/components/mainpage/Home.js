import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ExpInCompleted from './components/ExpInCompleted';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ExpInCompleted navigation={navigation} style={styles.task} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },    
  task: {
    marginTop: 20,
    backgroundColor: '#FAFAFA',
    fontWeight: 'regular',
    marginBottom: 100

  },
});

export default Home;
