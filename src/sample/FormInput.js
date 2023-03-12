import { View, Text, SafeAreaView, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const FormInput = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{alignItems:"center"}}>
            <Image source={require("../../assets/icons/icon-orang.png")} style={styles.avatar} />
        </View>

        <View style={{marginBottom:20}}>
            <Text>Student ID:</Text>
            <TextInput style={styles.inputText} placeholder='Enter your NPM' keyboardType='numeric' />
        </View>

        <View>
            <Text>Fullname:</Text>
            <TextInput style={styles.inputText} placeholder='Enter your name here' />
        </View>

        View

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      padding:20
    },
    avatar:{
        width:100,
        height:100,
        borderWidth:1,
        borderRadius:5,
    },
    inputText:{
        borderWidth:1,
        padding:10,
    }
  });

export default FormInput