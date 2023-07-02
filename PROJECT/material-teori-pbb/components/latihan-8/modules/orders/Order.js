import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import PlateIcon from "../../../../assets/icons/icon-fork.png"
import { Paragraph } from 'react-native-paper'

export default class Order extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex:1 }}>
        <View style={styles.container}>
            <Image source={PlateIcon} style={styles.plate} />
            <View style={{ padding:20 }}>
                <Text style={styles.title}>Sorry, no transaction found</Text>
                <Text style={styles.paragraph}>It's getting boring in here. Time to treat yourself.</Text>
                <TouchableOpacity style={styles.btn}>
                    <View>
                        <Text style={styles.btntext}>LET'S GO</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{ flex:1, justifyContent:"center", alignItems:"center" },
    plate:{width:150, height:150, marginBottom:20},
    title:{fontSize:20, color:"purple", fontWeight:"bold", textAlign:"center", marginBottom:10},
    paragraph:{color:"purple", textAlign:"center", fontSize:18, marginBottom:30},
    btn:{backgroundColor:"purple", borderRadius:25, padding:15},
    btntext:{color:"white", textAlign:"center", fontWeight:"bold", fontSize:20}
})