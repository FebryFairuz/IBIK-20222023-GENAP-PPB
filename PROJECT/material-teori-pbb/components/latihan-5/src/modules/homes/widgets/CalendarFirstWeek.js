import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CalendarFirstWeek = () => {
  const FirstWeek = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var day = [];
    for (let index = 0; index < 7; index++) {
      day.push(
        <View key={index} style={styles.call_box}>
          <Text style={{ ...styles.call_text, marginBottom:10 }}>{days[index]}</Text>
          <Text style={[styles.call_text, ((index===3) ? styles.call_curr : {})]}>{index + 1}</Text>
        </View>
      );
    }

    return day;
  };

  return (
    <View style={styles.callendar_container}>
      <FirstWeek />
    </View>
  );
};

export default CalendarFirstWeek;

const styles = StyleSheet.create({
  callendar_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  call_box: {
    width: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  call_text:{
    fontSize:16,
    paddingVertical:5,
  },
  call_curr:{
    padding:10,
    backgroundColor:"purple",
    color:"white"
  }
});
