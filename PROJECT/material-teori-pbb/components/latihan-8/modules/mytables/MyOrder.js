import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MyOrder() {
  return (
    <View style={styles.container}>
      <Text>MyOrder</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        marginTop:50,
        borderTopStartRadius:35,
        borderTopEndRadius:35,
        padding:25
    }
});