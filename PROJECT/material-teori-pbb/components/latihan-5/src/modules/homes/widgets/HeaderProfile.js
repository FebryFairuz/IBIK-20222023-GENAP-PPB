import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { getStorageData } from "../../../helper/storageHelper";

const HeaderProfile = () => {
  
  const [profile, setProfile] = useState("");
  useEffect(()=>{
    const get_data = async () =>{
      const data = await getStorageData("C_user");
      if(data){
        setProfile( JSON.parse(data) );
      }
    }

    get_data().catch(error => alert(error));
  },[])

  return (
    <View style={{ flexDirection:"row", justifyContent:"space-between", marginTop:20 }}>
      <View style={{ flexDirection:"row" }}>
        <Image style={{ width:50, height:50, backgroundColor:"white", borderRadius:100 }} source={require("../../../../../../assets/icons/icon-boy-1.png")} />
        <View style={{ marginLeft:15, flexDirection:"column", justifyContent:"center", alignItems:"flex-start" }}>
          <Text style={{ color:"white", fontSize:20, fontWeight:"bold" }}>
            {profile.name}
          </Text>
          <Text style={{ color:"white", fontSize:16 }}>
            {profile.email}
          </Text>
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
