import { View, Text, SafeAreaView, ImageBackground, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Sample4 = () => {
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
        <ScrollView>
          <View>
            <Text>IBIK</Text>
            <Text>Pem Perangkat Bergerak</Text>
          </View>
          <View>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Sample4;
