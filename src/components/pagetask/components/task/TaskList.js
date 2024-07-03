import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import CheckBox from 'react-native-check-box';

const TaskList = ({ data }) => {
  const [isCheckedList1, setIsCheckedList1] = useState(false);
  const [isCheckedList2, setIsCheckedList2] = useState(false);

  const handleCheckboxToggle = (listItem) => {
    if (listItem === item.list) {
      setIsCheckedList1(!isCheckedList1);
    } else if (listItem === item.list_1) {
      setIsCheckedList2(!isCheckedList2);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.dropdownText}>{item.categories}</Text>
      </View>

      <View style={styles.listItem}>
        <CheckBox
          isChecked={isCheckedList1}
          onClick={() => handleCheckboxToggle(item.list)}
          checkBoxColor="#26282B"
        />
        <Text style={styles.listText}>{item.list}</Text>
      </View>

      {item.list_1 && (
        <View style={styles.listItem}>
          <CheckBox
            isChecked={isCheckedList2}
            onClick={() => handleCheckboxToggle(item.list_1)}
            checkBoxColor="#26282B"
          />
          <Text style={styles.listText}>{item.list_1}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add list</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#90B8F8',
    borderRadius: 10,
    padding: 15,
    width: 300, // Adjust width as needed
    marginHorizontal: 10, // Add horizontal margin between items
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    height: 50,
    backgroundColor: '#EEEDEB',
    padding: 10,
  },
  listText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
    flex: 1,
  },
  addButton: {
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default TaskList;
