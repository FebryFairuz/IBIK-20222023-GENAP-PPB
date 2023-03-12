import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Sample2 = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden={false} />
      <View>
        <Text>Hello</Text>
      </View>
      <Text>Sample1</Text>
    </SafeAreaView>
  );
};

export default Sample2;
