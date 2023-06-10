import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import HeaderBar from './widgets/HeaderBar';
import ExpSectionList from './widgets/ExpSectionList';

export class MyFriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} style={(Platform.OS === "ios") ? "light" : "dark"} />
        <HeaderBar />
        <View style={{ flex: 10}}>
          {/* <Text style={{ color:"white" }}>SCROLL VIEW</Text>
          <ExpScrollView />
          <Text style={{ color:"white" }}>FLAT VIEW</Text>
          <ExpFlatList /> */}
          <ExpSectionList />
        </View>
      </SafeAreaView>
    )
  }
}

export default MyFriends


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "black" : "white",
  },
});