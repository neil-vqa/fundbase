import { View, Text, Pressable } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { formatCurrency } from "../../services/helpers";

const ProjectTransactionCard = ({ details }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{details.description}</Text>
        <Text style={styles.text}>{details.timestamp.toLocaleString()}</Text>
      </View>
      <View>
        <Text style={styles.text}>
          {details.operation} ({formatCurrency(details.amount)})
        </Text>
        <Text style={styles.text}>
          Balance: {formatCurrency(details.newBalance)}
        </Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#999",
  },
  text: {
    color: "#555",
    fontSize: "0.7rem",
    fontFamily: "Montserrat_400Regular",
  },
});

export default ProjectTransactionCard;
