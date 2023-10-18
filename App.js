import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import EStyleSheet from "react-native-extended-stylesheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStackScreen,
  ProjectsStackScreen,
} from "./components/StackScreens";
import globalStyles from "./components/GlobalStyles";
import { RealmProvider } from "@realm/react";
import { schemas } from "./services/models";

// initialization
EStyleSheet.build();
const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  return (
    <NavigationContainer>
      <RealmProvider schemas={schemas}>
        <SafeAreaProvider>
          <SafeAreaView style={globalStyles.container}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="Projects" component={ProjectsStackScreen} />
            </Tab.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </RealmProvider>
    </NavigationContainer>
  );
}
