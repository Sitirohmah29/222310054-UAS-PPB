import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const EditTask = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.editContainer}>
        <Text style={styles.editTask}>Edit Task: {item.title}</Text>
        <Text style={styles.editText}>Title Task</Text>
        <TextInput style={styles.input} placeholder="Title List" defaultValue={item.title} />
        <Text style={styles.editText}>Categories</Text>
        <TextInput style={styles.input} placeholder="Categories" />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  editContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'flex-start',
    marginBottom: 480,
  },
  editTask: {
    color: '#26282B',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    justifyContent: 'flex-start',
    marginRight: 120,
  },

  editText: {
    marginRight: 'auto',
    marginBottom: 10,
    color: '#82868C',
    fontSize: 15,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#F5F5F5',
    width: 350,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    color: '#82868C',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 120
  },
  deleteButtonText: {
    color: '#FFFFFF',
  },
});

export default EditTask;
