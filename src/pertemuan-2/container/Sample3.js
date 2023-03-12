import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Sample3 = () => {
  return (
    <ImageBackground
      source={{
        url: "https://kis.ibik.ac.id/environment/ibik/images/background.jpg",
      }}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center" }}
    >
      <StatusBar hidden={false} />
      <SafeAreaView>
        <View>
          <Text>IBIK</Text>
          <Text>Pem Perangkat Bergerak</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Sample3;
