import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 6, justifyContent:"center", alignItems:"center" }}>
        <Image
          source={require("../../assets/icons/icon-ibik.png")}
          style={styles.avatar}
        />
      </View>
      <View style={{ flex: 1, justifyContent:"center", alignItems:"center" }}>
        <Text style={{color:"#fff"}}>Loading...</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
  },
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "column"
  },
  avatar: {
    width: 100,
    height: 100,
  },
});

// const MyBio = {
//     identity:{
//         npm:212310056 ,
//         firstname: "MUHAMMAD",
//         middlename:"ZIDAN",
//         lastname:"AKBAR",
//     },
//     educations:[
//         {id:1, school:"SDN 1 Kota Bogor"},
//         {id:1, school:"SMPN 1 Kota Bogor"},
//         {id:1, school:"SMAN 1 Kota Bogor"},
//     ],
//     mobile_phone: 0812345679,
//     email:"212310056@student.ibik.ac.id",
//     gender:'M',
//     tall_body:175,
//     weight_body:64.5
// }
