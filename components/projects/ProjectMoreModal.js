import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import EStyleSheet from "react-native-extended-stylesheet";
import globalStyles from "../GlobalStyles";
import { useEffect, useState } from "react";
import { useRealm } from "@realm/react";

const ProjectMoreModal = ({ isOpen, setIsOpen, project, navigation }) => {
  const realm = useRealm();
  const [code, setCode] = useState(null);
  const [deleteCode, setDeleteCode] = useState(null);

  useEffect(() => {
    const initCode = Math.random().toString(36).substring(2, 6);
    setDeleteCode(initCode);
  }, []);

  const deleteFromDb = () => {
    realm.write(() => {
      realm.delete(project);
    });
    navigation.navigate("ProjectsScreen");
  };

  const deleteProject = () => {
    if (deleteCode === code) {
      Alert.alert(
        "Destructive action",
        "Are you sure you want to delete this project? This cannot be reverted.",
        [{ text: "Yes", onPress: () => deleteFromDb() }, { text: "No" }],
        { cancelable: true }
      );
    } else {
      Alert.alert(
        "Code mismatch",
        "Please make sure your input matches the delete code.",
        [{ text: "Okay" }],
        { cancelable: true }
      );
    }
  };

  return (
    <View>
      <Modal visible={isOpen} animationType="slide">
        <View style={globalStyles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
              <View style={globalStyles.genericModalHeader}>
                <Text style={globalStyles.genericModalHeaderTitle}>More</Text>
                <Pressable onPress={() => setIsOpen(false)}>
                  <Feather name="chevrons-down" size={50} color="#555" />
                </Pressable>
              </View>
              <View style={styles.container}>
                <Text>Export</Text>
                <View style={styles.deleteContainer}>
                  <Text style={styles.text}>
                    Deleting a project will also delete all of its transaction
                    history.
                  </Text>
                  <Text style={styles.text}>Delete code: {deleteCode}</Text>
                  <TextInput
                    style={globalStyles.genericTextInput}
                    onChangeText={setCode}
                    value={code}
                    placeholder="Type the delete code here"
                  />
                  <Pressable
                    android_ripple={styles.deleteBtnRipple}
                    style={[globalStyles.genericBtn, styles.deleteBtn]}
                    onPress={() => deleteProject()}
                  >
                    <Text style={[globalStyles.text, styles.deleteBtnText]}>
                      Delete project
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: "1rem",
    justifyContent: "space-between",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
  },
  deleteContainer: {
    paddingTop: 6,
    borderTopWidth: 1,
    borderColor: "#999",
  },
  deleteBtn: {
    backgroundColor: "#9B8980",
  },
  deleteBtnText: {
    color: "#fff",
  },
  deleteBtnRipple: {
    color: "#AFA199",
  },
});

export default ProjectMoreModal;
