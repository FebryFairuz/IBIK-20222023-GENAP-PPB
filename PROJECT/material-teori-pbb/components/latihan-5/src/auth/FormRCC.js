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
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import SignIn from "./SignIn";

export class FromRCC extends Component {
    constructor(props){
      super(props);
      this.state={
        title:"IBI Kesatuan",
        subTitle:"Bogor Indonesia"
      }
    }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={(Platform.OS === "ios") ? 'padding':'height'}>
        <ScrollView contentContainerStyle={{ flex:1 }} bounces={false}>
          <SafeAreaView style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical:10
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
                  {this.state.title}
                </Text>
                <Text
                  style={{ ...styles.logo_text, fontSize: 12, fontWeight: 300 }}
                >
                  {this.state.subTitle}
                </Text>
              </View>
            </View>

            <View style={{ marginTop:20, paddingHorizontal:15 }}>
                <View>
                  <Text style={styles.form_heading}>Change Logo</Text>
                </View>
                <View>
                  <Text style={styles.form_label}>Title</Text>
                  <TextInput placeholder="Enter title here" style={styles.form_input} defaultValue={this.state.title} onChangeText={(text)=>this.setState({title:text})} />
                </View>

                <View>
                  <Text style={styles.form_label}>Sub Title</Text>
                  <TextInput placeholder="Enter sub title here"style={styles.form_input}  defaultValue={this.state.subTitle} onChangeText={(text)=>this.setState({subTitle:text})}  />
                </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default FromRCC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  form_heading:{
    fontSize:20,fontWeight:"bold",
    marginBottom:10
  },
  form_label:{
    fontSize:14, marginBottom:5
  },
  form_input:{
    borderBottomWidth:1, borderColor:"grey",padding:10, marginBottom:15
  }
});

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
