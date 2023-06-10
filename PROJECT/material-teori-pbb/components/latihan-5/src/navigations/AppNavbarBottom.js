import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../modules/homes/Home";
import Profile from "../modules/Profile";

const AppNavbarBottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) =>({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "Schedule") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (rn === "Chat") {
            iconName = focused ? "chatbox" : "chatbox-outline";
          } else if (rn === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: [{ display: "flex", paddingVertical:10 }],
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schedule" component={Page1} />
      <Tab.Screen name="Chat" component={Page1} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavbarBottom;

const Page1 = () => {
  return (
    <SafeAreaView>
      <Text>Page 1</Text>
    </SafeAreaView>
  );
};
