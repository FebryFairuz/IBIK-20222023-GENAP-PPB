import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { ItemImage, ItemText } from "./ItemText";

const SampleStyleSheet = () => {
  return (
    <SafeAreaView>
      <View style={styles.fx_column_reverse}>
        <ItemText />
        <ItemImage />
      </View>
    </SafeAreaView>
  );
};

export default SampleStyleSheet;

const styles = StyleSheet.create({
  fx_row: {
    flexDirection: "row",
  },
  fx_row_reverse: {
    flexDirection: "row-reverse",
  },
  fx_column: {
    flexDirection: "column",
  },
  fx_column_reverse: {
    flexDirection: "column-reverse",
  },
});
