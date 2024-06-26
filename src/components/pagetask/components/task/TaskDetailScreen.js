import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-check-box'; // Import CheckBox from react-native-check-box

const TaskDetailScreen = ({ route }) => {
  const { item } = route.params;

  // State untuk menyimpan status checkbox
  const [isCheckedList1, setIsCheckedList1] = useState(false);
  const [isCheckedList2, setIsCheckedList2] = useState(false); // Misalnya item.list_1 default checked

  // Function to handle checkbox toggle
  const handleCheckboxToggle = (listItem) => {
    if (listItem === item.list) {
      setIsCheckedList1(!isCheckedList1); // Toggle isCheckedList1
    } else if (listItem === item.list_1) {
      setIsCheckedList2(!isCheckedList2); // Toggle isCheckedList2
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.categories}>{item.categories}</Text>
        
        {/* First List */}
        <View style={styles.card}>
          <View style={styles.listItem}>
            <CheckBox
              isChecked={isCheckedList1} // Gunakan isCheckedList1
              onClick={() => handleCheckboxToggle(item.list)}
              checkBoxColor="#26282B"
            />
            <Text style={styles.list}>{item.list}</Text>
          </View>
          <Text style={styles.time}>{item.due_time}</Text>
        </View>
        
        {/* Second List */}
        {item.list_1 && (
          <View style={styles.card}>
            <View style={styles.listItem}>
              <CheckBox
                isChecked={isCheckedList2} // Gunakan isCheckedList2
                onClick={() => handleCheckboxToggle(item.list_1)}
                checkBoxColor="#26282B"
              />
              <Text style={styles.list}>{item.list_1}</Text>
            </View>
            <Text style={styles.time}>{item.due_time}</Text>
          </View>
        )}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#26282B',
   
  },
  cardContent: {
    borderRadius: 10,
    padding: 15,
    color: '#F5F7F8'
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#F5F7F8'
   
  },
  card: {
    backgroundColor: '#F5F7F8',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  list: {
    fontSize: 16,
    color: '#543310', // Adjusted color for better contrast
    marginLeft: 10, // Added margin for checkbox alignment
    flex: 1, // Ensure text takes remaining space after checkbox
  },
  time: {
    fontSize: 14,
    color: '#26282B', // Adjusted color for better contrast
    marginTop: 8,
    alignSelf: 'flex-end', // Align time to the right within the card
  },
  categories: {
    fontSize: 18,
    color: '#F5F7F8',
    marginBottom: 20,
  }
});

export default TaskDetailScreen;
