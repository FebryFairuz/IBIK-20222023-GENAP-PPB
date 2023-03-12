import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import ContohRFC from './ContohRFC'
import ContohRFC2 from './ContohRFC2'

//RCC
export default class ContohRCC extends Component {
    constructor(props){
        super(props); //class as parent
        this.state={
            npm:123,
            name:"Melani",
            favorite:["makan","minum","tidur"],
            family:[{nama:"melani", status:"ibu"},
                    {nama:"emanuel", status:"ayah"}]
        }
    }

  render() {
    //JSX
    return (
      <SafeAreaView>
        {/* <Text>ContohRCC</Text> */}
        {/* Call RFC JSX */}
        {/* <Text>Call via JSX</Text>
        <ContohRFC />

        <Text>Sample call state</Text>
        <Text>NPM: {this.state.npm} </Text>
        <Text>Name: {this.state.name} </Text> */}

        <ContohRFC2 />

        
      </SafeAreaView>
    )
  }
}
