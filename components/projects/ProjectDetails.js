import { View, Text, Pressable } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { useState, useEffect } from "react";
import { useObject } from "@realm/react";
import Realm from "realm";
import globalStyles from "../GlobalStyles";
import { formatCurrency } from "../../services/helpers";

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
          <Text style={styles.fundTxt}>{formatCurrency(project.funds)}</Text>
          <View style={styles.fundBtnContainer}>
            <Pressable
              android_ripple={styles.fundBtnRipple}
              style={[styles.fundBtn, styles.addBtn]}
            >
              <Text>Add</Text>
            </Pressable>
            <Pressable
              style={[styles.fundBtn, styles.deductBtn]}
              android_ripple={styles.fundBtnRipple}
            >
              <Text>Deduct</Text>
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
    elevation: 1,
    margin: 6,
    borderRadius: 10,
  },
  title: {
    fontSize: "1.5rem",
    color: "#555",
    fontFamily: "Montserrat_500Medium",
  },
  bodyContainer: {
    paddingHorizontal: "0.3rem",
  },
  fundTxt: {
    fontSize: "1.8rem",
    color: "#333",
    fontFamily: "Montserrat_700Bold",
    paddingHorizontal: "1rem",
    paddingVertical: "0.7rem",
    marginVertical: "0.6rem",
    backgroundColor: "#D8E7D3",
    borderRadius: 10,
  },
  fundBtnContainer: {
    flexDirection: "row",
  },
  fundBtn: {
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: "#9DC292",
    borderRadius: 10,
    paddingHorizontal: "1.2rem",
    paddingVertical: "0.8rem",
    elevation: 5,
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
