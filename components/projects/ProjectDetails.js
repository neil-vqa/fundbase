import { View, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const ProjectDetails = ({ route, navigation }) => {
  const { projectId } = route.params;

  return (
    <View>
      <Text>{projectId}</Text>
    </View>
  );
};

export default ProjectDetails;
