import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Auth from "./components/latihan-5/src/auth/Auth";
import AppNavbarBottom from "./components/latihan-5/src/navigations/AppNavbarBottom";
import DetailAttendance from "./components/latihan-5/src/modules/attendance/widgets/DetailAttendance";
import AttendanceScreen from "./components/latihan-5/src/modules/attendance/Attendance";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{
            headerTitle: "Authentification",
            headerShown: false,
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen name="AppNavbarBottom" component={AppNavbarBottom} options={{ gestureEnabled: false }} />

        <Stack.Screen
          name="AttendanceScreen"
          component={AttendanceScreen}
          options={{
            headerTitle: "Attendance",
            headerShown: true,
            gestureEnabled: true,
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="DetailAttendance"
          component={DetailAttendance}
          options={{
            headerTitle: "Detail Attendance",
            headerShown: true,
            gestureEnabled: true,
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
