import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../../../const/ColorsData";
import TeachingTopicList from "./TeachingTopic";

export default function DetailAttendance({ navigation, route }) {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headingText}>{item.title}</Text>
        <Text
          style={{
            ...styles.headingText,
            fontSize: 16,
            fontWeight: "normal",
            marginTop: 15,
          }}
        >
          Lecturer
        </Text>
        <Text
          style={{ ...styles.headingText, fontSize: 16, fontWeight: "normal" }}
        >
          {item.lecturer.id} - {item.lecturer.name}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.middleContainer}>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontWeight: "bold" }}>Code </Text>
                <Text>{item.code}</Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontWeight: "bold" }}>Credit</Text>
                <Text>{item.credit}</Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontWeight: "bold" }}>Total</Text>
                <Text>8</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal:20}}>
          <TeachingTopicList />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4fcff",
  },
  topContainer: {
    flex: 1,
    backgroundColor: colors.purple,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headingText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "bold",
  },
  bottomContainer: {
    flex: 3,
    paddingTop: 60,
  },
  middleContainer: {
    position: "absolute",
    top: "-12%",
    width: "100%",
    padding: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 15,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});