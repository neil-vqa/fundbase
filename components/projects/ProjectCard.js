import { View, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const ProjectCard = ({ navigation, id, name, funds }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate("ProjectDetailsScreen", { projectId: id })
        }
      >
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{funds}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem",
    padding: "1.3rem",
    backgroundColor: "#9DC292",
    borderRadius: 15,
    height: "5rem",
    elevation: 5,
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
  },
});

export default ProjectCard;
