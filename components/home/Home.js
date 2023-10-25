import { StatusBar } from "expo-status-bar";
import { View, Image, Text } from "react-native";
import globalStyles from "../GlobalStyles";
import EStyleSheet from "react-native-extended-stylesheet";

const Home = () => {
  const today = new Date();
  const currentHour = today.getHours();

  const timeImages = {
    morning: {
      image: require("../../assets/images/morning.png"),
      text: "Morning comes whether you set the alarm or not.",
    },
    afternoon: {
      image: require("../../assets/images/afternoon.png"),
      text: "What about lunch?",
    },
    evening: {
      image: require("../../assets/images/evening.png"),
      text: "It is better to begin in the evening than not at all.",
    },
  };

  let imgSource;
  let greetingText;

  if (currentHour < 12) {
    imgSource = timeImages.morning.image;
    greetingText = timeImages.morning.text;
  } else if (currentHour < 18) {
    imgSource = timeImages.afternoon.image;
    greetingText = timeImages.afternoon.text;
  } else {
    imgSource = timeImages.evening.image;
    greetingText = timeImages.evening.text;
  }

  return (
    <View style={[globalStyles.container, styles.container]}>
      <StatusBar style="auto" />
      <Image source={imgSource} style={styles.greeting} />
      <Text style={styles.text}>{greetingText}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    width: 500,
    height: 450,
    resizeMode: "contain",
  },
  text: {
    fontStyle: "italic",
    fontFamily: "Montserrat_400Regular",
    color: "#777",
  },
});

export default Home;
