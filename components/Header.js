import { StyleSheet, Text, View } from "react-native";
import globalStyles from "./GlobalStyles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>Fundbase</Text>
      <Text style={globalStyles.text}>Manage your team's project funds.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d2d44",
    padding: 20,
  },
});

export default Header;
