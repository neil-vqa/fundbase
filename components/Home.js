import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./Header";
import globalStyles from "./GlobalStyles";

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <Header />
    </View>
  );
};

export default Home;
