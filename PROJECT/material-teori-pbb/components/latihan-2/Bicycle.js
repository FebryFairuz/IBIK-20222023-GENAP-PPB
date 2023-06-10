import { View, Text, Image } from "react-native";
import React from "react";
import { ItemLayout, ItemTyphograp } from "../stylesheets/Items";

function Bicycle() {
  const city = "south west";
  
  return (
    // <View style={{padding:10}}>
    //   {/* <ItemTyphograp /> */}
      
    //   {/* <View>
    //     <Text>Sepeda Gunung</Text>
    //     <Image
    //       source={{
    //         uri: "https://trexsporting.com/images/products/11-KbmXViHodZ.jpg",
    //       }}
    //       style={{width:200, height:200}}
    //     />
    //   </View>

    //   <View>
    //     <Text>Sepeda Gunung</Text>
    //     <Image
    //       source={require("../assets/icons/sepeda-lipat.jpeg")}
    //       style={{width:200, height:200}}
    //     />
    //   </View> */}
    // </View>
    <ItemLayout />
  );
}

export default Bicycle;



function Place2Go(value) {
  return <Text>We'r going to {value} now, come on.</Text>;
}
