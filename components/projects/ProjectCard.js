import { View, Text, Pressable } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { formatCurrency } from "../../services/helpers";
import { Feather } from "@expo/vector-icons";

const ProjectCard = ({ navigation, id, name, funds }) => {
  return (
    <View>
      <Pressable style={styles.item}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>{formatCurrency(funds)}</Text>
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate("ProjectDetailsScreen", { projectId: id })
          }
        >
          <Feather name="chevron-right" size={45} color="#999" />
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = EStyleSheet.create({
  item: {
    marginBottom: "0.5rem",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "1.3rem",
    paddingVertical: "0.9rem",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#999",
    borderWidth: 0.6,
    height: "5rem",
    elevation: 5,
  },
  title: {
    fontSize: "1rem",
    fontFamily: "Montserrat_600SemiBold",
  },
  text: {
    color: "#999",
    fontSize: "1rem",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default ProjectCard;
