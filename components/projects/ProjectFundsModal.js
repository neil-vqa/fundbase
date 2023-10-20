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
import { updateFundsFormSchema } from "../../services/validation";

const ProjectFundsModal = ({
  isOpen,
  setIsOpen,
  operation,
  updateFunction,
}) => {
  return (
    <View>
      <Modal visible={isOpen} animationType="slide">
        <View style={globalStyles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderTitle}>{operation} funds</Text>
                <Pressable onPress={() => setIsOpen(false)}>
                  <Feather name="chevrons-down" size={50} color="#555" />
                </Pressable>
              </View>
              <View>
                <Formik
                  initialValues={{ description: "", amount: "" }}
                  validationSchema={updateFundsFormSchema}
                  onSubmit={(values, actions) => {
                    updateFunction(
                      values.description,
                      operation,
                      Number(values.amount)
                    );
                    actions.resetForm();
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
                        <Text>Description</Text>
                        <TextInput
                          onChangeText={handleChange("description")}
                          onBlur={handleBlur("description")}
                          value={values.description}
                          style={styles.textInput}
                        />
                        <Text style={styles.errorText}>
                          {touched.description && errors.description}
                        </Text>
                      </View>
                      <View style={styles.inputContainer}>
                        <Text>Amount</Text>
                        <TextInput
                          onChangeText={handleChange("amount")}
                          onBlur={handleBlur("amount")}
                          value={values.amount}
                          inputMode="numeric"
                          style={styles.textInput}
                        />
                        <Text style={styles.errorText}>
                          {touched.amount && errors.amount}
                        </Text>
                      </View>
                      <View style={styles.fundBtnContainer}>
                        <Pressable
                          style={[styles.fundBtn]}
                          android_ripple={styles.fundBtnRipple}
                          onPress={handleSubmit}
                        >
                          <Feather
                            name={
                              operation === "add"
                                ? "plus-circle"
                                : "minus-circle"
                            }
                            size={20}
                            color="#555"
                          />
                          <Text style={styles.fundBtnText}>
                            {operation ? operation.toUpperCase() : "Add/Deduct"}
                          </Text>
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
  textInput: {
    paddingHorizontal: "1.2rem",
    paddingVertical: "0.8rem",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 10,
    marginVertical: 8,
    fontSize: "1.1rem",
  },
  errorText: {
    color: "red",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "1rem",
    paddingTop: "1rem",
    borderBottomWidth: 1,
    borderColor: "#999",
  },
  modalHeaderTitle: {
    fontSize: "1.3rem",
    color: "#555",
  },
  fundBtnContainer: {
    marginTop: "1rem",
    flexDirection: "row",
    justifyContent: "center",
  },
  fundBtn: {
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
});

export default ProjectFundsModal;
