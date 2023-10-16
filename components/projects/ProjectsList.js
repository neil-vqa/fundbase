import { useState } from "react";
import { FlatList, View } from "react-native";
import ProjectCard from "./ProjectCard";
import globalStyles from "../GlobalStyles";
import EStyleSheet from "react-native-extended-stylesheet";

const ProjectsList = ({ navigation }) => {
  const projectslist = [
    { id: 1, name: "vacation siargao", funds: 30000 },
    { id: 2, name: "tshirt orders", funds: 10500 },
    { id: 3, name: "construction materials and renovation", funds: 37850 },
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
    <View style={globalStyles.container}>
      <FlatList
        style={styles.container}
        keyExtractor={(item) => item.id}
        data={projects}
        renderItem={({ item }) => {
          return (
            <ProjectCard
              id={item.id}
              name={item.name}
              funds={item.funds}
              navigation={navigation}
            ></ProjectCard>
          );
        }}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    margin: "1.7rem",
  },
});

export default ProjectsList;
