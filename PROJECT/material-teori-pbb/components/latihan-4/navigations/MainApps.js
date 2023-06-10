import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homes from "../IG/Homes/Homes";
import MyFriends from "../IG/Friends/MyFriends";

const MainApps = () => {
  const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarStyle: [{ display:"flex", backgroundColor:"black" }],
          tabBarActiveTintColor:"white",
          tabBarInactiveTintColor:"gray"
         }}
        >
        <Tab.Screen name="Home" component={Homes} />
        <Tab.Screen name="Search" component={MyFriends} />
      </Tab.Navigator>
    );
}

export default MainApps

const Page1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate("MainApps", { name: "Febry" })}
      >
        <View
          style={{
            backgroundColor: "purple",
            padding: 10,
            borderRadius: 10,
            margin: 10,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Click here to see me
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Page2 = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Text>This is {route.params.name}'s profile</Text>
    </SafeAreaView>
  );
};