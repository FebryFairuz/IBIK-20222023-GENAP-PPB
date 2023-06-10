import { View, Image, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HeaderNav = () => {
  return (
    <View style={styles.header}>
      <View>
        <Image
          source={require("../../../../../assets/icons/icon-ig-text.png")}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.icons}>
          <FontAwesome5 name={"heart"} size={25} color="white" />
        </View>
        <View style={styles.icons}>
          <FontAwesome5 name={"paper-plane"} size={25} color="white" />
        </View>
      </View>
    </View>
  );
};

export default HeaderNav;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons:{
    marginRight:20
  }
});
