import { StatusBar } from "expo-status-bar";
import { View, Image, Text } from "react-native";
import globalStyles from "../GlobalStyles";
import EStyleSheet from "react-native-extended-stylesheet";

const Home = () => {
  const today = new Date();
  const currentHour = today.getHours();

  const timeImages = {
    morning: require("../../assets/images/morning.png"),
    afternoon: require("../../assets/images/afternoon.png"),
    evening: require("../../assets/images/evening.png"),
  };

  let imgSource;
  let greeting;

  if (currentHour < 12) {
    imgSource = timeImages.morning;
    greeting = "Good morning!";
  } else if (currentHour < 18) {
    imgSource = timeImages.afternoon;
    greeting = "Good afternoon!";
  } else {
    imgSource = timeImages.evening;
    greeting = "Good evening!";
  }

  return (
    <View style={[globalStyles.container, styles.container]}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        <Image source={imgSource} style={styles.greeting} />
      </View>
      <View style={styles.greetingContainer}>
        <Text style={globalStyles.title}>{greeting}</Text>
        <View style={styles.tagline}>
          <Text style={[globalStyles.text, styles.text]}>Fundbase</Text>
          <Text style={[globalStyles.text, styles.text]}>
            Manage your team's project funds.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    justifyContent: "center",
    padding: "1rem",
  },
  imageContainer: {
    flex: 1,
  },
  greetingContainer: {
    flex: 1,
    alignItems: "center",
  },
  greeting: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  tagline: {
    marginTop: "2rem",
  },
  text: {
    fontSize: "0.8rem",
  },
});

export default Home;
