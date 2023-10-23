import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import EStyleSheet from "react-native-extended-stylesheet";
import { Formik } from "formik";
import globalStyles from "../GlobalStyles";
import { newProjectFormSchema } from "../../services/validation";

const ProjectEditModal = ({
  isOpen,
  setIsOpen,
  currentDetails,
  updateFunction,
}) => {
  return (
    <View>
      <Modal visible={isOpen} animationType="slide">
        <View style={globalStyles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
              <View style={globalStyles.genericModalHeader}>
                <Text style={globalStyles.genericModalHeaderTitle}>
                  Edit project
                </Text>
                <Pressable onPress={() => setIsOpen(false)}>
                  <Feather name="chevrons-down" size={50} color="#555" />
                </Pressable>
              </View>
              <View>
                <Formik
                  initialValues={{
                    name: currentDetails.name,
                    description: currentDetails.description,
                  }}
                  validationSchema={newProjectFormSchema}
                  onSubmit={(values, actions) => {
                    updateFunction(values.name, values.description);
                  }}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                  }) => (
                    <View>
                      <View style={styles.inputContainer}>
                        <Text>Project Name</Text>
                        <TextInput
                          onChangeText={handleChange("name")}
                          onBlur={handleBlur("name")}
                          value={values.name}
                          style={globalStyles.genericTextInput}
                        />
                        <Text style={globalStyles.genericErrorText}>
                          {touched.name && errors.name}
                        </Text>
                      </View>

                      <View style={styles.inputContainer}>
                        <Text>Description</Text>
                        <TextInput
                          onChangeText={handleChange("description")}
                          onBlur={handleBlur("description")}
                          value={values.description}
                          style={globalStyles.genericTextInput}
                          multiline={true}
                        />
                        <Text style={globalStyles.genericErrorText}>
                          {touched.description && errors.description}
                        </Text>
                      </View>

                      <View style={styles.updateBtnContainer}>
                        <Pressable
                          style={[
                            globalStyles.genericBtn,
                            globalStyles.greenBtn,
                          ]}
                          android_ripple={globalStyles.greenBtnRipple}
                          onPress={handleSubmit}
                        >
                          <Feather name="check" size={24} color="#555" />
                          <Text style={globalStyles.greenBtnText}>Update</Text>
                        </Pressable>
                      </View>
                    </View>
                  )}
                </Formik>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = EStyleSheet.create({
  inputContainer: {
    marginTop: "1rem",
    marginHorizontal: "2rem",
  },
  updateBtnContainer: {
    marginTop: "1rem",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ProjectEditModal;
