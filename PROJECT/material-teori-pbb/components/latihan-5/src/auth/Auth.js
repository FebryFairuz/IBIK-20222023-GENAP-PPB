import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Component } from "react";
import SignIn from "./SignIn";

export class Auth extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex:1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
          <SafeAreaView style={{ flex:1 }}>
            <View
              style={{
                flex: 0.7,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../assets/icons/icon-ibik.png")}
                style={styles.logo}
              />
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.logo_text}>
                  IBI <Text>Kesatuan</Text>{" "}
                </Text>
                <Text
                  style={{
                    ...styles.logo_text,
                    fontSize: 12,
                    fontWeight: 300,
                    textAlign: "left",
                  }}
                >
                  Bogor Indonesia
                </Text>
              </View>
            </View>

            <ImageBackground
              style={{ flex: 6, backgroundColor: "purple", height: height / 2 }}
              source={require("../../../../assets/backgrounds/img-ibik-bg-student.jpeg")}
            >
              <View style={{ flex: 1 }}></View>
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <SignIn navigation={this.props.navigation} />
              </View>
            </ImageBackground>
            
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 45 : 0,
    paddingBottom: Platform.OS === "android" ? 15 : 0,
  },
  logo: {
    width: 50,
    height: 50,
  },
  logo_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple",
  },
});

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
