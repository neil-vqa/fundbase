import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { newProjectFormSchema } from "../../services/validation";
import { useRealm } from "@realm/react";
import Realm from "realm";
import EStyleSheet from "react-native-extended-stylesheet";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const NewProjectForm = () => {
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
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{ name: "", description: "" }}
          validationSchema={newProjectFormSchema}
          onSubmit={(values, actions) => {
            createProject(values);
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

              <View style={styles.formButton}>
                <Button
                  onPress={handleSubmit}
                  title="Create"
                  style={styles.formButton}
                />
              </View>
            </View>
          )}
        </Formik>
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
  formButton: {
    marginTop: "3rem",
  },
});

export default NewProjectForm;
