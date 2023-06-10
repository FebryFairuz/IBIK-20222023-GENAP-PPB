import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";

const CardMenu = () => {
  const navigation = useNavigation();
  const menuList = [
    { id: 1, name: "Attendance", icon: "calendar-check" },
    { id: 2, name: "Hot Line", icon: "headset" },
    { id: 3, name: "Actifity", icon: "chart-line" },
    { id: 4, name: "PCF", icon: "edit" },
    { id: 5, name: "Counselor", icon: "comments" },
    { id: 6, name: "Others", icon: "ellipsis-h" },
  ];

  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 40,
        padding: 15,
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection:"row", flexWrap:"wrap" }}>
        {menuList.map((v, index) => (
          <MenuItem item={v} key={index} navigation={navigation} />
        ))}
      </View>
    </View>
  );
};

export default CardMenu;

const MenuItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity style={styles.card_item} onPress={() => navigation.navigate("AttendanceScreen")}  >
      <View style={styles.card_item}>
        <FontAwesome5 name={item.icon} size={35} color={"purple"} />
      </View>
      <Text style={styles.card_text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card_item:{
        width:100,marginHorizontal:5, marginVertical:10, flexDirection:"column", justifyContent:"center", alignItems:"center"
    },
    card_icon:{marginBottom:10},
    card_text:{ color:"purple", fontSize:14 }
});
