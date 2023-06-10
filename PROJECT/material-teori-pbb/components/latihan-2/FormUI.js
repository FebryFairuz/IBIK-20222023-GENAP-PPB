import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const FormUI = () => {
  const [toggleStatusBar, setToggleStatusBar] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar hidden={toggleStatusBar} />
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/icons/icon-orang.png")}
            style={styles.avatar}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text>Student ID:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your NPM"
            keyboardType="numeric"
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text>Fullname:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your name here"
          />
        </View>

        <View>
          <Text>Address:</Text>
          <View
            style={{
              backgroundColor: "#fff",
              borderColor: "#000000",
              borderWidth: 1,
            }}
          >
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              style={{ padding: 10 }}
            />
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Button
            title="Button form OS"
            onPress={() => setToggleStatusBar(true)}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setToggleStatusBar(false)}
          >
            {buttonAct("Touchable Opacity")}
          </TouchableOpacity>

          <TouchableHighlight
            activeOpacity={0.6}
            onPress={() => setToggleStatusBar(true)}
          >
            {buttonAct("Touchable Highlight")}
          </TouchableHighlight>

          <TouchableWithoutFeedback
            activeOpacity={0.6}
            onPress={() => setToggleStatusBar(false)}
          >
            {buttonAct("Touchable Without Feedback")}
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

const buttonAct = (title) => {
  return (
    <View
      style={{
        backgroundColor: "purple",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        marginVertical: 5,
      }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputText: {
    borderWidth: 1,
    padding: 10,
  },
});

export default FormUI;
