import { SafeAreaView, Text, View } from "react-native";
import React, { Component } from "react";
import { ShakeEventExpo } from "../../components/ShakeEvent";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isShake: false,
        count:0
    };
  }
  componentDidMount() {
    ShakeEventExpo.addListener(() => {
      console.log("Shake Shake Shake");
      this.setState({isShake:true, count: this.state.count+1})
    });
  }
  componentWillUnmount() {
    ShakeEventExpo.removeListener();
    this.setState({isShake:false})
  }
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: 28 }}>Home</Text>
        <Text style={{ fontSize: 20 }}>Please shake your phone</Text>
        <Text style={{ fontSize: 20, color:"brown" }}>{this.state.isShake ? "You just shaked me "+this.state.count+" time" :""}</Text>
      </SafeAreaView>
    );
  }
}

export default Home;
