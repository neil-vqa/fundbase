import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import ProjectCard from "./ProjectCard";
import globalStyles from "../GlobalStyles";
import EStyleSheet from "react-native-extended-stylesheet";
import { useQuery } from "@realm/react";

const ProjectsList = ({ navigation }) => {
  const projectsResult = useQuery("Project").sorted("created", true);

  return (
    <View style={globalStyles.container}>
      <FlatList
        style={styles.container}
        keyExtractor={(item) => item._id.toString()}
        data={projectsResult}
        renderItem={({ item }) => {
          return (
            <ProjectCard
              id={item._id.toString()}
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
    margin: "0.5rem",
    marginTop: "1rem",
  },
});

export default ProjectsList;
