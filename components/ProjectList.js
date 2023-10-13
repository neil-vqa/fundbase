import { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const ProjectList = () => {
  const projectslist = [
    { id: 1, name: "vacation siargao", funds: 30000 },
    { id: 2, name: "tshirt orders", funds: 10500 },
    { id: 3, name: "construction materials", funds: 37850 },
    { id: 4, name: "food seminar", funds: 9500 },
    { id: 5, name: "travel switzerland", funds: 120500 },
    { id: 6, name: "travel switzerland", funds: 120500 },
    { id: 7, name: "travel switzerland", funds: 120500 },
    { id: 8, name: "travel switzerland", funds: 120500 },
    { id: 9, name: "travel switzerland", funds: 120500 },
    { id: 10, name: "travel switzerland", funds: 120500 },
    { id: 11, name: "travel switzerland", funds: 120500 },
    { id: 12, name: "travel japan", funds: 120500 },
  ];

  const [projects, setProjects] = useState(projectslist);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={projects}
        renderItem={({ item }) => {
          // TODO: card component
          return (
            <TouchableOpacity style={styles.item}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.funds}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    padding: 20,
    backgroundColor: "#f0ebd8",
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
  },
});

export default ProjectList;
