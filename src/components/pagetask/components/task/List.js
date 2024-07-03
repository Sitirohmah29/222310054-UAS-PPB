import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Vibration } from 'react-native';
import CheckBox from 'react-native-check-box';
import moment from 'moment';

const ListItem = ({ item }) => {
  const [isCheckedList1, setIsCheckedList1] = useState(false);
  const [isCheckedList2, setIsCheckedList2] = useState(false);

  // Fungsi untuk menangani toggle checkbox
  const handleCheckboxToggle = (listItem) => {
    if (listItem === item.list) {
      setIsCheckedList1(!isCheckedList1);
      Alert.alert("Notification", `You have ${isCheckedList1 ? "cancel" : "completed"} ${item.list}`);
      Vibration.vibrate(2000);
    } else if (listItem === item.list_1) {
      setIsCheckedList2(!isCheckedList2);
      Alert.alert("Notification", `You have ${setIsCheckedList2 ? "cancel" : "completed"} ${item.list_1}`);
      Vibration.vibrate(2000);
    }
  };

  const isPastDue = moment(item.due_time, 'D MMMM, YYYY').isBefore(moment());

  return (
    <View style={styles.cardContent}>
      <View style={styles.card}>
        <View style={styles.listItem}>
          <CheckBox
            isChecked={isCheckedList1}
            onClick={() => handleCheckboxToggle(item.list)}
            checkBoxColor="#FAFAFA"
          />
          <Text style={styles.list}>{item.list}</Text>
        </View>
        <Text style={[styles.time, isPastDue && styles.pastDueTime]}>
          {item.due_time}
        </Text>
      </View>

      {/* Daftar Kedua */}
      {item.list_1 && (
        <View style={styles.card}>
          <View style={styles.listItem}>
            <CheckBox
              isChecked={isCheckedList2}
              onClick={() => handleCheckboxToggle(item.list_1)}
              checkBoxColor="#FAFAFA"
            />
            <Text style={styles.list}>{item.list_1}</Text>
          </View>
          <Text style={[styles.time, isPastDue && styles.pastDueTime]}>
            {item.due_time}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#E5DACE',
  },
  card: {
    backgroundColor: '#90B8F8',
    borderRadius: 5,
    marginBottom: 10,
    padding: 20,
    width: 350,
    height: 100,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  list: {
    fontSize: 16,
    color: '#FAFAFA',
    marginLeft: 10,
    flex: 1,
  },
  time: {
    fontSize: 14,
    color: '#000000',
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  pastDueTime: {
    color: 'red', // Warna merah untuk tanggal yang sudah lewat
  },
  categories: {
    fontSize: 18,
    color: '#E5DACE',
    marginBottom: 20,
  },
});

export default ListItem;
