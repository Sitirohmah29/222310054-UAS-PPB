import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this library installed

const Create = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tittle list</Text>
        <Text style={styles.subtitle}>in task : ....</Text>
      </View>
      <Text style={styles.label}>Dates</Text>
      <TextInput style={styles.dateInput} placeholder="dd/mm/yy" />
      <View style={styles.descriptionCard}>
        <View style={styles.descriptionContainer}>
          <Ionicons name="menu" size={24} color="gray" />
          <Text style={styles.descriptionText}>Add a description</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F8',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#26282B',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  dateInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginBottom: 20,
  },
  descriptionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginBottom: 20,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  buttonText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Create;
