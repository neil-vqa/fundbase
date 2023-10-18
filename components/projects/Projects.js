import { View, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import ProjectsList from "./ProjectsList";
import globalStyles from "../GlobalStyles";

const Projects = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Button
        title="+ New Project"
        onPress={() => navigation.navigate("NewProjectScreen")}
      />
      <ProjectsList navigation={navigation}></ProjectsList>
    </View>
  );
};

export default Projects;
