import { View, Text, Pressable } from "react-native";
import ProjectsList from "./ProjectsList";
import globalStyles from "../GlobalStyles";
import EStyleSheet from "react-native-extended-stylesheet";

const Projects = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <Pressable
          style={styles.newBtn}
          android_ripple={styles.newBtnRipple}
          onPress={() => navigation.navigate("NewProjectScreen")}
        >
          <Text>New Project</Text>
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
    backgroundColor: "#DBE6F5",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  newBtnRipple: {
    color: "#C3D6EF",
  },
});
export default Projects;
