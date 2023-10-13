import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import ProjectAdd from "./ProjectAdd";
import ProjectList from "./ProjectList";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <ProjectAdd></ProjectAdd>
      <ProjectList></ProjectList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
