import { View, Text, Pressable } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { formatCurrency } from "../../services/helpers";
import { FontAwesome5 } from "@expo/vector-icons";

const ProjectCard = ({ navigation, id, name, funds }) => {
  return (
    <View>
      <Pressable style={styles.item}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>{formatCurrency(funds)}</Text>
        </View>
        <FontAwesome5
          name="chevron-right"
          size={32}
          color="#888"
          onPress={() =>
            navigation.navigate("ProjectDetailsScreen", { projectId: id })
          }
        />
      </Pressable>
    </View>
  );
};

const styles = EStyleSheet.create({
  item: {
    marginBottom: "0.4rem",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "1.3rem",
    paddingVertical: "0.9rem",
    backgroundColor: "#B1CEA8",
    borderRadius: 10,
    height: "5rem",
    elevation: 5,
  },
  title: {
    color: "#222",
    fontSize: "1rem",
    fontFamily: "Montserrat_600SemiBold",
  },
  text: {
    color: "#444",
    fontSize: "1rem",
    fontFamily: "Montserrat_400Regular",
  },
  cardRipple: {
    color: "#CEE1C9",
  },
});

export default ProjectCard;
