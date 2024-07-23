import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';

const EditList = ({ route, navigation }) => {
  const { item } = route.params;
  const [title, setTitle] = useState(item.title);
  const [dueDate, setDueDate] = useState(item.due_time);
  const [description, setDescription] = useState(item.description || '');

  const handleSave = () => {
    Alert.alert('Save', `Title: ${title}\nDue Date: ${dueDate}\nDescription: ${description}`);
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert('Delete', `Deleting item: ${title}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.editContainer}>
        <Text style={styles.editList}>Edit List: {title}</Text>
        <Text style={styles.editText}>Title List</Text>
        <TextInput
          style={styles.input}
          placeholder="Title List"
          defaultValue={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.editText}>Due Date</Text>
        <TextInput
          style={styles.input}
          placeholder="dd/mm/yy"
          defaultValue={dueDate}
          onChangeText={(text) => setDueDate(text)}
        />
        <TextInput
          style={[styles.input, styles.description]}
          placeholder="Add a description"
          multiline
          defaultValue={description}
          onChangeText={(text) => setDescription(text)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  editContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    width: '81%',
    marginBottom: 350,
    alignItems: 'center',
    marginRight: 90,
  },
  editList: {
    color: '#26282B',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginRight: 100
  
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
    width: '125%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    color: '#82868C',
    marginLeft: 65,
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
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
    marginRight: 120,
  },
  deleteButtonText: {
    color: '#FFFFFF',
  },
});

export default EditList;
