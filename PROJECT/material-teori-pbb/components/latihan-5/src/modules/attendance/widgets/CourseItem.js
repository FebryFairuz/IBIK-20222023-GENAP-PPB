import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CourseItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={() => navigation.navigate("DetailAttendance", { item: item })}
    >
      <View style={styles.itemContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.itemMain}>
            <Text style={{ fontWeight: "bold" }}>{item.code}</Text>
            <Text>{item.title}</Text>
          </View>
          <View style={styles.itemPercent}>
            <Text
              style={{
                backgroundColor: "purple",
                color: "white",
                padding: 10,
                textAlign: "center",
              }}
            >
              100 %
            </Text>
          </View>
        </View>
        <View style={styles.itemFooter}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.itemText}>Total</Text>
            <Text style={{ ...styles.itemText, fontWeight: "bold" }}>8</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.itemText}>Present</Text>
            <Text style={{ ...styles.itemText, fontWeight: "bold" }}>8</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.itemText}>Absent</Text>
            <Text style={{ ...styles.itemText, fontWeight: "bold" }}>0</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "#d5d5d5",
    marginVertical: 5,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
  },
  itemMain: {
    flex: 3,
  },
  itemPercent: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
  itemFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  itemText: { color: "purple", fontSize: 14 },
});

export default CourseItem;