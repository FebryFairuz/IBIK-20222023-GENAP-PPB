import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Auth from "./components/latihan-8/auth/Auth";
import MainRoutes from "./components/latihan-8/modules/MainRoutes";
import QRScanner from "./components/latihan-8/modules/scanners/QRScanner";
import Lunch from "./components/latihan-8/modules/explores/Lunch";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainRoutes" component={MainRoutes} options={{ headerShown: false }} />
        <Stack.Screen name="Lunch" component={Lunch} options={{ headerShown: true }}/>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{
            headerTitle: "Authentification",
            headerShown: false,
            headerBackTitle: "Back",
          }}
        />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
}
