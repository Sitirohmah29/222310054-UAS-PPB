import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Vibration, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';
import moment from 'moment';
import { Audio } from 'expo-av';

const ListItem = ({ item, navigation }) => {
  const [isCheckedList1, setIsCheckedList1] = useState(false);
  const [isCheckedList2, setIsCheckedList2] = useState(false);

  const [sound, setSound] = useState();

  async function playNotif() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/Bruh.m4a')
    );

    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleCheckboxToggle = (listItem) => {
    if (listItem === item.list) {
      setIsCheckedList1(!isCheckedList1);
      Alert.alert("Notification", `You have ${isCheckedList1 ? "cancel" : "completed"} ${item.list}`);
      Vibration.vibrate(500);
      playNotif();
    } else if (listItem === item.list_1) {
      setIsCheckedList2(!isCheckedList2);
      Alert.alert("Notification", `You have ${isCheckedList2 ? "cancel" : "completed"} ${item.list_1}`);
      Vibration.vibrate(500);
    }
  };

  const isPastDue = moment(item.due_time, 'D MMMM, YYYY').isBefore(moment());
  const isToday = moment(item.due_time, 'D MMMM, YYYY').isSame(moment(), 'day');

  return (
    <View style={styles.cardContent}>
      <TouchableOpacity onPress={() => navigation.navigate('EditList', { item })}>
        <View style={styles.card}>
          <View style={styles.listItem}>
            <Text style={styles.list}>{item.list}</Text>
          </View>
          <View style={[styles.dateContainer, isToday && styles.todayBorder]}>
            <CheckBox
              isChecked={isCheckedList1}
              onClick={() => handleCheckboxToggle(item.list)}
              checkBoxColor={isCheckedList1 ? "green" : "#FAFAFA"}
            />
            <Text style={[styles.time, isPastDue && styles.pastDueTime]}>
              {item.due_time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {item.list_1 && (
        <TouchableOpacity onPress={() => navigation.navigate('EditList', { item })}>
          <View style={styles.card}>
            <View style={styles.listItem}>
              <Text style={styles.list}>{item.list_1}</Text>
            </View>
            <View style={[styles.dateContainer, isToday && styles.todayBorder]}>
              <CheckBox
                isChecked={isCheckedList2}
                onClick={() => handleCheckboxToggle(item.list_1)}
                checkBoxColor={isCheckedList2 ? "green" : "#FAFAFA"}
              />
              <Text style={[styles.time, isPastDue && styles.pastDueTime]}>
                {item.due_time}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    borderRadius: 10,
    padding: 10,
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
    flex: 1,
  },
  time: {
    fontSize: 14,
    color: '#000000',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  pastDueTime: {
    color: 'red',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 10,
  },
  todayBorder: {
    borderLeftColor: 'red',
  },
});

export default ListItem;
