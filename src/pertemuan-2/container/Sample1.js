import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Sample1 = () => {
  return (
    <View>
      <StatusBar hidden={true} />
      <View>
        <Text>Hello</Text>
      </View>
      <Text>Sample1</Text>
    </View>
  );
};

export default Sample1;
