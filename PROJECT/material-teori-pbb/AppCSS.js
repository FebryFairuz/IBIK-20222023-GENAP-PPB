import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ItemImage, ItemTyphograp } from "./components/stylesheets/Items";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <ItemTyphograp />
        <ItemImage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
  },
  container: {
    padding: 10,
    flex: 1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
});
