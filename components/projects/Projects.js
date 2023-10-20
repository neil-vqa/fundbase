import { View, Text, Pressable } from "react-native";
import ProjectsList from "./ProjectsList";
import globalStyles from "../GlobalStyles";
import EStyleSheet from "react-native-extended-stylesheet";
import { Feather } from "@expo/vector-icons";

const Projects = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <Pressable
          style={styles.newBtn}
          android_ripple={styles.newBtnRipple}
          onPress={() => navigation.navigate("NewProjectScreen")}
        >
          <Feather name="plus" size={20} color="#555" />
          <Text style={styles.newBtnTxt}>New Project</Text>
        </Pressable>
      </View>
      <ProjectsList navigation={navigation}></ProjectsList>
    </View>
  );
};
const styles = EStyleSheet.create({
  container: {
    margin: "1rem",
  },
  newBtn: {
    padding: "1rem",
    backgroundColor: "#BAD4B3",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  newBtnRipple: {
    color: "#CEE1C9",
  },
  newBtnTxt: {
    color: "#555",
    marginHorizontal: "0.5rem",
  },
});
export default Projects;
