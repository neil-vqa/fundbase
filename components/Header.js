import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fundbase</Text>
      <Text style={styles.text}>
        Create, manage, and track project funds and savings goals.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d2d44",
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "Montserrat_500Medium",
  },
  text: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "Montserrat_400Regular",
  },
});

export default Header;
