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
import { Formik } from "formik";
import globalStyles from "../GlobalStyles";
import { updateFundsFormSchema } from "../../services/validation";
import { formatCurrency } from "../../services/helpers";

const ProjectFundsModal = ({
  isOpen,
  setIsOpen,
  operation,
  updateFunction,
  currentBalance,
}) => {
  return (
    <View>
      <Modal visible={isOpen} animationType="slide">
        <View style={globalStyles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
              <View style={globalStyles.genericModalHeader}>
                <Text style={globalStyles.genericModalHeaderTitle}>
                  {operation} funds
                </Text>
                <Pressable onPress={() => setIsOpen(false)}>
                  <Feather name="chevrons-down" size={50} color="#555" />
                </Pressable>
              </View>
              <View>
                <Formik
                  initialValues={{ description: "", amount: "" }}
                  validationSchema={updateFundsFormSchema}
                  onSubmit={(values, actions) => {
                    if (
                      operation === "deduct" &&
                      currentBalance - values.amount < 0
                    ) {
                      Alert.alert(
                        "Check your amount",
                        `The amount to be deducted must not exceed the current fund balance of ${formatCurrency(
                          currentBalance
                        )}`,
                        [{ text: "Okay" }]
                      );
                    } else {
                      updateFunction(
                        values.description,
                        operation,
                        Number(values.amount)
                      );
                      actions.resetForm();
                    }
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
                          style={globalStyles.genericTextInput}
                        />
                        <Text style={globalStyles.genericErrorText}>
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
                          style={globalStyles.genericTextInput}
                        />
                        <Text style={globalStyles.genericErrorText}>
                          {touched.amount && errors.amount}
                        </Text>
                      </View>
                      <View style={styles.fundBtnContainer}>
                        <Pressable
                          style={[
                            globalStyles.genericBtn,
                            globalStyles.greenBtn,
                          ]}
                          android_ripple={globalStyles.greenBtnRipple}
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
                          <Text style={globalStyles.greenBtnText}>
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
  fundBtnContainer: {
    marginTop: "1rem",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ProjectFundsModal;
