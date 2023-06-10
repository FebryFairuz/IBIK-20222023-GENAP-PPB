import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nama:"",
        npm:"",
        alamat:""
    }
  }

  handlerSubmit(){
    alert(this.state.nama);
  }

  render() {
    return (
      <SafeAreaView style={{ padding: 5 }}>
        <View style={{ marginBottom: 10 }}>
          <Text>Nama</Text>
          <TextInput style={styles.text_input} onChangeText={(text)=> this.setState({nama:text}) } />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>NPM</Text>
          <TextInput style={styles.text_input}  onChangeText={(text)=> this.setState({npm:text}) }  />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Alamat</Text>
          <TextInput style={styles.text_input}  onChangeText={(text)=> this.setState({alamat:text}) }  />
        </View>

        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity style={styles.btn_signin} onPress={()=>this.handlerSubmit()}>
            <Text style={{ color:"white", textAlign:"center" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  text_input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "purple",
  },
  btn_signin: {
    backgroundColor: "purple",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop:15
  }
});
