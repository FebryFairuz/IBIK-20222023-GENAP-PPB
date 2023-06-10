import { SafeAreaView, Text, View, Image, Platform } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import Header from './widgets/Header';

export class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex:1, backgroundColor: (Platform.OS==="ios")?"black":"white" }}>
        <StatusBar hidden={false} style={"light"} />
        <Header />
        <View style={{ flex: 10, backgroundColor:"blue" }}>
            
        </View>
      </SafeAreaView>
    )
  }
}

export default Home