import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarList from "./components/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    alignItems: "center",
    justifyContent: "center",
  },
});
