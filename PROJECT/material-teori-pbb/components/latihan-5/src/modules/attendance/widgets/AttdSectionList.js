import { View, Text, SectionList, StyleSheet } from "react-native";
import React from "react";
import CoursesData from "../../../const/CoursesData";
import CourseItem from "./CourseItem";

export default function AttdSectionList({ navigation }) {
  const DATA = [
    {
      title: CoursesData.length + " courses",
      data: CoursesData,
    },
  ];

  const SectionTitle = ({ title }) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>Daftar matakuliah yang anda ikuti pada semester ini</Text>
      </View>
    );
  };
  return (
    <SectionList
      sections={DATA}
      renderItem={({ item }) => (
        <CourseItem item={item} navigation={navigation} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <SectionTitle title={title} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 5,
    backgroundColor: "#6f42c121",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: "bold",
    marginBottom: 5,
  },
});