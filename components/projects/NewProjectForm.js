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
                  />
                  <Text style={globalStyles.genericErrorText}>
                    {touched.description && errors.description}
                  </Text>
                </View>

                <View style={styles.formButtonContainer}>
                  <Pressable
                    android_ripple={globalStyles.greenBtnRipple}
                    onPress={handleSubmit}
                    style={[globalStyles.genericBtn, globalStyles.greenBtn]}
                  >
                    <Feather name="check" size={24} color="#555" />
                    <Text style={globalStyles.greenBtnText}>Create</Text>
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
  formButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default NewProjectForm;
