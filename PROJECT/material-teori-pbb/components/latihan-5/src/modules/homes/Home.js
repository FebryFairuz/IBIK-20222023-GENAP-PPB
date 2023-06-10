import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import HeaderProfile from "./widgets/HeaderProfile";
import CardMenu from "./widgets/CardMenu";
import CalendarFirstWeek from "./widgets/CalendarFirstWeek";
import ScheduleToday from "./widgets/ScheduleToday";

export class Home extends Component {
  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../../../../assets/backgrounds/img-purple.jpg")}
      >
        <StatusBar hidden={false} style="light" />
        <SafeAreaView style={{ flex:1 }}>
          <View style={{paddingHorizontal: 15, marginBottom:40 }}>
            <HeaderProfile />
            <CardMenu />
          </View>

          <View style={{ flex:1, backgroundColor:"white", borderTopStartRadius:20, borderTopEndRadius:20, padding:15 }}>
            <CalendarFirstWeek />
            <ScheduleToday />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default Home;
