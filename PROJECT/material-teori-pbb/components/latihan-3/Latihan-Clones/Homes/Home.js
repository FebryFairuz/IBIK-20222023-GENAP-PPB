import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React, { Component } from "react";
import Header from "./widgets/Header";

export class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "purple" }}>
        <Header />

        <View style={{ flex: 10, backgroundColor: "blue" }}>
            <ScrollView style={{ flex:1 }}>
                <Text style={{ color:"white" }}>hello world</Text>
            </ScrollView>    
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
