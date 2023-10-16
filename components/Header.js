import { Text, View } from "react-native";
import globalStyles from "./GlobalStyles";
import EStyleSheet from "react-native-extended-stylesheet";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>Fundbase</Text>
      <Text style={globalStyles.text}>Manage your team's project funds.</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#2A4374",
    padding: "1.4rem",
    margin: "1.7rem",
    borderRadius: 20,
    elevation: 25,
  },
});

export default Header;
