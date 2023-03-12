import { StyleSheet, Text, View } from "react-native";
import React from "react";

//RFC bentuk ke 2
export default function ContohRFC2() {
  return (
    <View>
      <Text>ContohRFC2</Text>
      {/* {Myname(varObject.name)} */}
      <Myname value={varObject.name} npm={varObject.npm} />
      <Myname2 value={varObject.name} npm={varObject.npm} />
    </View>
  );
}

const styles = StyleSheet.create({});

const varObject = { npm: 1234, name: "Febri D" };

const Myname = ({ value, npm }) => {
  return (
    <Text>
      Myname is {value} & {npm}{" "}
    </Text>
  );
};

const Myname2 = (props) => {
  return (
    <Text>
      Myname is {props.value} & {props.npm}{" "}
    </Text>
  );
};
