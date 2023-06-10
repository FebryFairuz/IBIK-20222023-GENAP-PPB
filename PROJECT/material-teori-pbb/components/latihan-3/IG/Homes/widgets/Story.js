import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Users } from '../../const-data/ObjDummies'

const StoryItem = ({item}) =>{
    return (
        <View style={styles.story_container}>
            <Image style={{ ...styles.story_ava, borderColor:"#ff1493", borderWidth:((item.isread) ? 0:3)  }} source={item.image} />
            <Text style={styles.story_name}>{item.name}</Text>
        </View>
    )
}

const Story = () => {
  return (
    <FlatList horizontal={true} data={Users} renderItem = {({item}) => <StoryItem item={item} />} />
  )
}

export default Story

const styles = StyleSheet.create({
    story_container:{
        marginHorizontal:8
    },
    story_ava:{
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:"#f0f8ff",
        marginBottom:2
    },
    story_name:{fontSize:11, color:"white", textAlign:"center"}
})