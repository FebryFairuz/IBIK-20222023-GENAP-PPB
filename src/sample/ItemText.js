import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemText = () => {
  return (
    <View style={{...styles.container, backgroundColor:"powderblue", }}>
      <Text style={{color:"red"}}>Latihan Style</Text>
      <Text style={styles.txtHeading}>Text Heading 1</Text>
      <Text style={{...styles.txtHeading, color:"red"}}>Text Heading 1</Text>
    </View>
  )
}

const ItemImage = () =>{
    return (
        <View style={{...styles.container,backgroundColor:"green"}}>
            <Image source={require("../../assets/icons/icon-orang.png")} style={styles.avatar} />
        </View>
    )
}

export {ItemText, ItemImage}

const styles = StyleSheet.create({
    txtHeading:{
        fontSize:30
    },
    avatar:{
        width:100,
        height:100,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:"white"
    },
    container:{
        width:200, height:200,
        margin:5,
        alignItems:"center",
        justifyContent:"center"
    }
});
