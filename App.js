import { NavigationContainer } from "@react-navigation/native";
import { RealmProvider } from "@realm/react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import EStyleSheet from "react-native-extended-stylesheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStackScreen,
  ProjectsStackScreen,
} from "./components/StackScreens";
import globalStyles from "./components/GlobalStyles";
import { schemas } from "./services/models";
import { FontAwesome5 } from "@expo/vector-icons";

// initialization
EStyleSheet.build();
const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  return (
    <NavigationContainer>
      <RealmProvider schema={schemas}>
        <SafeAreaProvider>
          <SafeAreaView style={globalStyles.container}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                  tabBarIcon: () => <FontAwesome5 name="home" size={24} />,
                  tabBarActiveTintColor: "#86ACDF",
                  tabBarInactiveTintColor: "gray",
                }}
              />
              <Tab.Screen
                name="Projects"
                component={ProjectsStackScreen}
                options={{
                  tabBarIcon: () => <FontAwesome5 name="list" size={24} />,
                  tabBarActiveTintColor: "#86ACDF",
                  tabBarInactiveTintColor: "gray",
                }}
              />
            </Tab.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </RealmProvider>
    </NavigationContainer>
  );
}
