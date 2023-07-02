import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import TableIcon from "../../../../assets/icons/icon-tables.png";
import MyOrder from './MyOrder';

export class MyTable extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection:"row", justifyContent:"center", alignItems:"center", paddingTop:50 }}>
            <View style={styles.box}>
                <Image source={TableIcon} style={styles.boxIcon} />
                <View style={{ marginLeft:15, flexDirection:'column', justifyContent:"center" }}>
                    <Text style={styles.boxTitle}>Table</Text>
                    <Text style={styles.boxNum}>09</Text>
                </View>
            </View>
        </View>
        <MyOrder />
      </SafeAreaView>
    )
  }
}

export default MyTable

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple",
    },
    box:{
        borderWidth:1,
        borderColor:"white",
        borderRadius:20,
        padding:20,
        paddingHorizontal:30,
        flexDirection:"row",
        backgroundColor:"white"
    },
    boxIcon:{
        width:70,
        height:70,
    },
    boxTitle:{
        fontSize:28,
        fontWeight:"bold",
        textTransform:"uppercase"
    },
    boxNum:{
        fontSize:26,
        color:"purple",
        textAlign:"center",
        fontWeight:"bold"
    }
});