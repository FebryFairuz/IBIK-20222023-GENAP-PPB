import { View, Text, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <Image source={require("../../../../../assets/icons/icon-ig-text.png")} />
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginHorizontal: 10 }}>
          <FontAwesome5 name={"heart"} color="white" size={30} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <FontAwesome5 name={"paper-plane"} color="white" size={30} />
        </View>
      </View>
    </View>
  );
};

export default Header;
