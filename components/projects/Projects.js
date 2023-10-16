import { View } from "react-native";
import ProjectsList from "./ProjectsList";
import globalStyles from "../GlobalStyles";
import ProjectsAdd from "./ProjectsAdd";

const Projects = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <ProjectsAdd />
      <ProjectsList navigation={navigation}></ProjectsList>
    </View>
  );
};

export default Projects;
