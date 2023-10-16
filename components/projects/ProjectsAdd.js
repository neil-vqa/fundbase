import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const ProjectsAdd = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.65}>
        <Text style={styles.add}>+ Add Project</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    backgroundColor: "#0d1321",
    padding: 16,
    color: "#fff",
    borderRadius: 8,
  },
});

export default ProjectsAdd;
