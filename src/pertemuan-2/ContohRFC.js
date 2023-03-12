import { View, Text } from "react-native";
import React from "react";

//RFC
const ContohRFC = () => {
  const today = new Date();
  return (
    <View>
      <Text>Today: {today.toDateString()} </Text>
      <Text>NPM : {varObject.npm} </Text>
      <Text>Nama sya : {varObject.name} </Text>
      <Text>Sample call Array Object</Text>
      {arrObject.map((v, index) => (
        <View key={index}>
          <Text>NPM:{v.npm}</Text>
          <Text>Name:{v.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContohRFC;

//const varObject = {key:value} // format scripting object
const varObject = { npm: 1234, name: "Febri D" };
const arrObject = [
  { npm: 432, name: "Zaky" },
  { npm: 986, name: "Melani" },
];

const arrObject2 = [
    { npm: 432, fullname: "Zaky", address:"", age:12 },
    { npm: 986, fullname: "Melani", address:"", age:12 },
  ];
