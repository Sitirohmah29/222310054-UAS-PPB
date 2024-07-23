import React, { useState } from "react";
import { View } from "react-native";
import moment from "moment";
import { CalendarWeeks } from "./Calender";

export default function Calender() {
  const [chooseDate, setChooseDate] = useState(moment().toDate());

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CalendarWeeks chooseDate={chooseDate} setChooseDate={setChooseDate} />
    </View>
  );
}
