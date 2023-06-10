import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import HeaderNav from "./widgets/HeaderNav";
import Story from "./widgets/Story";
import Feeds from "./widgets/Feeds";

export class Homes extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} style={(Platform.OS === "ios") ? "light" : "dark"} />
        <HeaderNav />
        <View style={{ flex: 15}}>
          <ScrollView style={{ flex:1 }}>
            <Story />
            <Feeds />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Homes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "black" : "white",
  },
});
