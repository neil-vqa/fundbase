import { TextInput, View, Text, Pressable } from "react-native";
import { Formik } from "formik";
import { newProjectFormSchema } from "../../services/validation";
import { useRealm } from "@realm/react";
import Realm from "realm";
import EStyleSheet from "react-native-extended-stylesheet";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";
import globalStyles from "../GlobalStyles";

const NewProjectForm = ({ navigation }) => {
  const realm = useRealm();

  const createProject = (details) => {
    realm.write(() => {
      realm.create("Project", {
        _id: new Realm.BSON.ObjectId(),
        name: details.name,
        description: details.description,
        funds: 0,
        created: new Date(),
        updated: new Date(),
      });
    });
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Formik
            initialValues={{ name: "", description: "" }}
            validationSchema={newProjectFormSchema}
            onSubmit={(values, actions) => {
              createProject(values);
              actions.resetForm();
              navigation.navigate("ProjectsScreen");
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
                    style={styles.textInput}
                  />
                  <Text style={styles.errorText}>
                    {touched.name && errors.name}
                  </Text>
                </View>

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

                <View style={styles.formButtonContainer}>
                  <Pressable
                    android_ripple={styles.formButtonRipple}
                    onPress={handleSubmit}
                    style={styles.formButton}
                  >
                    <Feather name="check" size={24} color="#555" />
                    <Text style={styles.formButtonTxt}>Create</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
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
  formButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  formButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
    backgroundColor: "#9DC292",
    paddingHorizontal: "1.8rem",
    paddingVertical: "0.8rem",
    borderRadius: 10,
    elevation: 5,
  },
  formButtonRipple: {
    color: "#BAD4B3",
  },
  formButtonTxt: {
    fontSize: "1rem",
    color: "#555",
    fontFamily: "Montserrat_600SemiBold",
    marginLeft: 6,
  },
});

export default NewProjectForm;
