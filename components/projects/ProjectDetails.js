import { View, Text, Pressable } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { useState, useEffect } from "react";
import { useObject } from "@realm/react";
import Realm from "realm";
import globalStyles from "../GlobalStyles";
import { formatCurrency } from "../../services/helpers";
import { Feather } from "@expo/vector-icons";

const ProjectDetails = ({ route, navigation }) => {
  const { projectId } = route.params;

  const [project, setProject] = useState({});
  const projectResult = useObject(
    "Project",
    new Realm.BSON.ObjectId(projectId)
  );

  useEffect(() => {
    setProject(projectResult);
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.container, styles.container]}>
        <Text style={styles.title}>{project.name}</Text>
        <View style={styles.bodyContainer}>
          <View style={styles.fundTxtContainer}>
            <Text style={styles.fundTxt}>{formatCurrency(project.funds)}</Text>
            <Text style={styles.fundTxtLabel}>total funds</Text>
          </View>
          <View style={styles.fundBtnContainer}>
            <Pressable
              android_ripple={styles.fundBtnRipple}
              style={[styles.fundBtn, styles.addBtn]}
            >
              <Feather name="plus-circle" size={20} color="#555" />
              <Text style={styles.fundBtnText}>Add</Text>
            </Pressable>
            <Pressable
              style={[styles.fundBtn, styles.deductBtn]}
              android_ripple={styles.fundBtnRipple}
            >
              <Feather name="minus-circle" size={20} color="#555" />
              <Text style={styles.fundBtnText}>Deduct</Text>
            </Pressable>
          </View>
          <Text>{project.description}</Text>
          <Text>{project.updated && project.updated.toLocaleString()}</Text>
        </View>
      </View>
      <View style={[globalStyles.container, styles.container]}>
        <Text>transaction history</Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    padding: "1rem",
    margin: 6,
  },
  title: {
    fontSize: "1.5rem",
    color: "#555",
    fontFamily: "Montserrat_600SemiBold",
  },
  bodyContainer: {
    paddingHorizontal: "0.3rem",
  },
  fundTxtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: "1rem",
    paddingVertical: "0.7rem",
    marginVertical: "0.6rem",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  fundTxt: {
    fontSize: "1.8rem",
    color: "#555",
    fontFamily: "Montserrat_700Bold",
  },
  fundTxtLabel: {
    fontSize: "0.9rem",
    color: "#999",
    fontFamily: "Montserrat_500Medium",
  },
  fundBtnContainer: {
    flexDirection: "row",
  },
  fundBtn: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9DC292",
    borderRadius: 10,
    paddingHorizontal: "1.2rem",
    paddingVertical: "0.8rem",
    elevation: 5,
  },
  fundBtnText: {
    fontSize: "1rem",
    color: "#555",
    fontFamily: "Montserrat_600SemiBold",
    marginLeft: 6,
  },
  fundBtnRipple: {
    color: "#BAD4B3",
  },
  addBtn: {
    marginRight: "0.3rem",
  },
  deductBtn: {
    marginLeft: "0.3rem",
  },
});

export default ProjectDetails;
