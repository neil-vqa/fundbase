import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import ProjectCard from "./ProjectCard";
import globalStyles from "../GlobalStyles";
import EStyleSheet from "react-native-extended-stylesheet";
import { getProjects } from "../../services/projects";
import dbConn from "../../services/getDbConn";

const ProjectsList = ({ navigation }) => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getProjects(dbConn, setProjects);
  }, [projects]);

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
