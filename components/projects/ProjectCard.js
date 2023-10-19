import { View, Text, Pressable } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { formatCurrency } from "../../services/helpers";

const ProjectCard = ({ navigation, id, name, funds }) => {
  return (
    <View>
      <Pressable
        style={styles.item}
        android_ripple={styles.cardRipple}
        onPress={() =>
          navigation.navigate("ProjectDetailsScreen", { projectId: id })
        }
      >
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{formatCurrency(funds)}</Text>
      </Pressable>
    </View>
  );
};

const styles = EStyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem",
    paddingHorizontal: "1.3rem",
    paddingVertical: "0.9rem",
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
  cardRipple: {
    color: "#BAD4B3",
  },
});

export default ProjectCard;
