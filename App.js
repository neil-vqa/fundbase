import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";
import { StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
