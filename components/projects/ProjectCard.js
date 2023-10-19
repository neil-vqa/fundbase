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
    marginBottom: "0.4rem",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "1.3rem",
    paddingVertical: "0.9rem",
    backgroundColor: "#2A4374",
    borderRadius: 10,
    height: "5rem",
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "Montserrat_400Regular",
  },
  cardRipple: {
    color: "#3F5682",
  },
});

export default ProjectCard;
