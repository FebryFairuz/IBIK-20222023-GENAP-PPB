import { Text, View } from "react-native";
import React from "react";

var name = "Honda";
const Motorcycle = () => {
  return (
    <View>
      <Text>Hi i'm a Motorcycle</Text>
      <Text>Merek: {name}</Text>
      <Text>Type: {types.type}</Text>
      <Text>Model: {types.model}</Text>
      <Text>Harga: {types.harga}</Text>
    </View>
  );
};

export default Motorcycle;

const types = {type:"Matic", model:"Vario", harga:15000};

