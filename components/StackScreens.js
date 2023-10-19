import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Projects from "./projects/Projects";
import ProjectDetails from "./projects/ProjectDetails";
import NewProjectForm from "./projects/NewProjectForm";

const HomeStack = createNativeStackNavigator();
const ProjectsStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
    </HomeStack.Navigator>
  );
}

function ProjectsStackScreen() {
  return (
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen
        name="ProjectsScreen"
        component={Projects}
        options={{ title: "Projects" }}
      />
      <ProjectsStack.Screen
        name="ProjectDetailsScreen"
        component={ProjectDetails}
        options={{ title: "Project Details" }}
      />
      <ProjectsStack.Screen
        name="NewProjectScreen"
        component={NewProjectForm}
        options={{ title: "New Project" }}
      />
    </ProjectsStack.Navigator>
  );
}

export { HomeStackScreen, ProjectsStackScreen };
