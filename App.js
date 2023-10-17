import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import EStyleSheet from "react-native-extended-stylesheet";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStackScreen,
  ProjectsStackScreen,
} from "./components/StackScreens";
import globalStyles from "./components/GlobalStyles";
import { createProjectsTable } from "./services/projects";
import dbConn from "./services/getDbConn";

// initialization
EStyleSheet.build();
const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  useEffect(() => createProjectsTable(dbConn), []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={globalStyles.container}>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Projects" component={ProjectsStackScreen} />
          </Tab.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
