import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import ProjectAdd from "./ProjectAdd";
import ProjectList from "./ProjectList";
import globalStyles from "./GlobalStyles";

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <Header />
      <ProjectAdd></ProjectAdd>
      <ProjectList></ProjectList>
    </View>
  );
};

export default Home;
