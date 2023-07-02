import { Text, View, Image, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LunchIcon from "../../../../assets/icons/icon-lunch.png";
import SaladIcon from "../../../../assets/icons/icon-salad.png";
import BurgerIcon from "../../../../assets/icons/icon-burger.png";
import CoffeeIcon from "../../../../assets/icons/icon-coffee.png";
import DessertIcon from "../../../../assets/icons/icon-dessert.png";

export default class Explore extends Component {
  render() {
    const categories = [{id:1, name:"lunch", icon:LunchIcon},{id:2, name:"salad", icon:SaladIcon},
                        {id:3, name:"burger", icon:BurgerIcon}, {id:4, name:"coffee", icon:CoffeeIcon},
                        {id:5, name:"dessert", icon:DessertIcon}]
    return (
      <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>Choose you favorite food</Text>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom:100, paddingHorizontal:15 }}>
            {categories.map((v,index)=>(
                <TouchableOpacity key={index} style={styles.category} onPress={()=>this.props.navigation.navigate('Lunch')} >
                    <View style={{ flex:1, alignItems:"center"}}>
                        <Image source={v.icon} style={styles.categoryIcon} />
                    </View>
                    <View style={{ flex:1}}>
                        <Text style={styles.categoryText}>{v.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        paddingVertical:10,
    },
    category:{
        backgroundColor:"white",
        marginBottom:15,
        borderRadius:15,
        paddingVertical:15,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        shadowColor: "#7F5DF0",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        backgroundColor:"purple"
    },
    categoryIcon:{
        width:100,
        height:100,
    },
    categoryText:{
        fontSize:25,
        fontWeight:"bold",
        textTransform:'uppercase',
        textAlign:"center",
        color:"white"
    }
})