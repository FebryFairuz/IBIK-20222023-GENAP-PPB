import { View, Text, StyleSheet, Image, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "../../../assets/icons/icon-restaurant.png";
import ExploreIcon from "../../../assets/icons/icon-explore.png";
import QRCodeIcon from "../../../assets/icons/icon-qr-code.png";
import OrderIcon from "../../../assets/icons/icon-bill.png";
import ProfileIcon from "../../../assets/icons/icon-tag.png";
import { Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import QRScanner from "./scanners/QRScanner";
import Explore from "./explores/Explore";
import Order from "./orders/Order";
import MyTable from "./mytables/MyTable";
import Home from "./homes/Home";

const {width,height} = Dimensions.get('window')
const MainRoutes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: "absolute",
            bottom: (height*.02),
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 15,
            height: (height*0.09),
            ...styles.shadow,
          },
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CreateNavIcon focused={focused} name={"Home"} icon={HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <CreateNavIcon
              focused={focused}
              name={"Explore"}
              icon={ExploreIcon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="QRScanner"
        component={QRScanner}
        options={{
            tabBarIcon: ({ focused }) => (
              <CreateNavIcon focused={focused} name={"QRIS"} icon={QRCodeIcon} />
            ),
        }}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <Image source={QRCodeIcon} resizeMode="contain" style={{ width:40, height:40, tintColor:"white" }} />
        //   ),
        //   tabBarButton:(props) => <CustomeNavBar {...props} />
        // }}
      />
      
      <Tab.Screen
        name="Orders"
        component={Order}
        options={{
          tabBarIcon: ({ focused }) => (
            <CreateNavIcon focused={focused} name={"Orders"} icon={OrderIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="MyTable"
        component={MyTable}
        options={{
          tabBarIcon: ({ focused }) => (
            <CreateNavIcon
              focused={focused}
              name={"Profile"}
              icon={ProfileIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainRoutes;

const CreateNavIcon = ({ focused, name, icon }) => {
  return (
    <View style={{ ...styles.navIconContainer, backgroundColor: focused ? "purple":"white" }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ ...styles.navIcon, tintColor: focused ? "white" : "purple" }}
      />
    </View>
  );
};

const CustomeNavBar = ({children, onPress}) =>{
    return (
        <TouchableOpacity style={styles.navCustomeIconContainer} onPress={onPress} >
            <View style={styles.navCustomeIcon}>
                {children}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  navIconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: (Platform.OS === "android") ? 0 : (height*.02),
    borderRadius:35, padding:10
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navCustomeIconContainer:{
    top:-30,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#7F5DF0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  navCustomeIcon:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:"purple"
  }
});
