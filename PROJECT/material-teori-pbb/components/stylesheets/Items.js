import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const peoples = [
  { name: "Erdiana", fams: "Sister" },
  { name: "Emanuel", fams: "Brother" },
];

const ItemTyphograp = () => {
  return (
    <View style={{width:200,height:350, borderWidth:1}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "brown",
          color: "#fff",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10,
        }}
      >
        History of Bicycle
      </Text>

      <Text style={styles.paragrapf}>
        A bicycle, also called a
        <Text style={{ ...styles.paragrapf, color: "red" }}>pedal cycle</Text>,
        <Text style={{ ...styles.paragrapf, fontWeight: "bold" }}>bike</Text>,
        <Text style={{ ...styles.paragrapf, fontStyle: "italic" }}>
          push-bike or cycle
        </Text>
        , is a human-powered or motor-powered assisted, pedal-driven,
        single-track vehicle, having two wheels attached to a frame, one behind
        the other. A bicycle rider is called a cyclist, or bicyclist.
      </Text>
    </View>
  );
};

const ItemImage = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: "powderblue" }}>
      <Image
        source={require("../../assets/icons/icon-orang.png")}
        style={styles.avatar}
      />
    </View>
  );
};

export { ItemTyphograp, ItemImage };

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },
  container: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});

const TakeARide = ({ peoples }) => {
  return (
    <View>
      <Text>Let's go riding with us:</Text>
      {peoples.map((v, index) => (
        <View key={index}>
          <Text>
            {v.name} / my {v.fams}
          </Text>
        </View>
      ))}
    </View>
  );
};
