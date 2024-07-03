import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ColorPallete } from "../data/color";
import { DataInCompleted } from "../data/List";

export function CalendarWeeks({ chooseDate, setChooseDate }) {
  const [selectedDate, setSelectedDate] = useState(chooseDate);
  const cWeek = LoopWeekDay(selectedDate);
  const [myweek, setMyWeek] = useState(cWeek);
  const [filteredData, setFilteredData] = useState([]);

  const scrollViewRef = useRef(null);

  useEffect(() => {
    const selectedIndex = myweek.findIndex((v) =>
      moment(v.date).isSame(selectedDate, "day")
    );
    if (selectedIndex !== -1 && scrollViewRef.current) {
      const offsetX = selectedIndex * 50;
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
    }
    setChooseDate(selectedDate);
    filterDataByDate(selectedDate);
  }, [selectedDate, myweek]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const ChangeDateBySelected = (date) => {
    setSelectedDate(date);
    setChooseDate(date);
    const cWeek = LoopWeekDay(date);
    setMyWeek(cWeek);
    filterDataByDate(date);
  };

  const handleConfirm = (date) => {
    ChangeDateBySelected(date);
    hideDatePicker();
  };

  const handleChooseDay = (date) => {
    ChangeDateBySelected(date);
  };

  const filterDataByDate = (date) => {
    const formattedDate = moment(date).format("D MMMM, YYYY");
    const filtered = DataInCompleted.filter((item) =>
      moment(item.due_time, "D MMMM, YYYY").isSame(date, "day")
    );
    setFilteredData(filtered);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <ScrollView
          horizontal={true}
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
        >
          {myweek.map((v, index) => (
            <View
              key={index}
              style={
                moment(selectedDate).format("YYYY-MM-DD") === v.date
                  ? styles.dayContainerActive
                  : styles.dayContainer
              }
            >
              <TouchableOpacity onPress={() => handleChooseDay(v.date)}>
                <Text style={styles.dayName}>{v.name.charAt(0)}</Text>
                <Text style={{ ...styles.dayDate, fontSize: 11 }}>
                  {moment(v.date).format("DD")} {moment(v.date).format("MMM")}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.calendar_picker}>
          <TouchableOpacity onPress={showDatePicker}>
            <Ionicons name={"calendar"} color= "#90B8F8" size={34} />
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <ScrollView style={styles.dataContainer}>
        {filteredData.map((item) => (
          <View key={item.id} style={styles.dataItem}>
            <Text style={styles.dataTitle}>{item.title}</Text>
            <Text style={styles.dataList}>{item.list}</Text>
            {item.list_1 && <Text style={styles.dataList}>{item.list_1}</Text>}
            <Text style={styles.dataCategory}>{item.categories}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const LoopWeekDay = (now) => {
  var weekdays = [];
  for (let i = 0; i <= 6; i++) {
    const day = moment(now).clone().weekday(i);
    weekdays.push({
      name: day.format("dd"),
      date: day.format("YYYY-MM-DD"),
    });
  }

  return weekdays;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
  },
  calendar_picker: {
    paddingHorizontal: 15,
    justifyContent: "center",
    marginRight: 45,
    backgroundColor: ColorPallete.white,
    color: "#90B8F8",
  },
  dayContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  dayContainerActive: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: ColorPallete.light,
    color: ColorPallete.white,
  },
  dayName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#90B8F8",
    textAlign: "center",
  },
  dayDate: {
    fontSize: 14,
    color: "#000000",
    textAlign: "center",
  },
  dataContainer: {
    flex: 1,
    marginLeft: 50,
    padding: 10,
  },
  dataItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor:"#F5F7F8",
    borderRadius: 30,
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#90B8F8",
  },
  dataList: {
    fontSize: 16,
    color: ColorPallete.dark,
  },
  dataCategory: {
    fontSize: 14,
    color: ColorPallete.dark,
  },
  dataDueTime: {
    fontSize: 14,
    color: ColorPallete.grey,
  },
});
