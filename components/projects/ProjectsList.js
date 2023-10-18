import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import ProjectCard from "./ProjectCard";
import globalStyles from "../GlobalStyles";
import EStyleSheet from "react-native-extended-stylesheet";
import { useQuery } from "@realm/react";

const ProjectsList = ({ navigation }) => {
  const [projects, setProjects] = useState([]);
  const projectsResult = useQuery("Project");

  useEffect(() => {
    setProjects(projectsResult);
  }, [projects]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        style={styles.container}
        keyExtractor={(item) => item._id}
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
