import { View, Text, Image } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HeaderProfile = () => {
  return (
    <View style={{ flexDirection:"row", justifyContent:"space-between", marginTop:20 }}>
      <View style={{ flexDirection:"row" }}>
        <Image style={{ width:50, height:50, backgroundColor:"white", borderRadius:100 }} source={require("../../../../../../assets/icons/icon-boy-1.png")} />
        <View style={{ marginLeft:15, flexDirection:"column", justifyContent:"center", alignItems:"flex-start" }}>
          <Text style={{ color:"white", fontSize:20, fontWeight:"bold" }}>M Adrian</Text>
          <Text style={{ color:"white", fontSize:16 }}>212310016</Text>
        </View>
      </View>
      <View style={{ justifyContent:"center" }}>
        <View style={{ backgroundColor:"rgba(255,255,255,0.4)", borderRadius:100, padding:10  }}>
            <FontAwesome5 name={"bell"} size={30} color={"white"} />
        </View>
      </View>
    </View>
  );
};

export default HeaderProfile;
