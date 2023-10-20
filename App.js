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
import { Feather } from "@expo/vector-icons";

// initialization
EStyleSheet.build();
const Tab = createBottomTabNavigator();

function tabIconSetter(route, color, size) {
  let iconName;

  if (route.name === "Home") {
    iconName = "home";
  } else if (route.name === "Projects") {
    iconName = "list";
  }

  return <Feather name={iconName} size={size} color={color} />;
}

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  return (
    <NavigationContainer>
      <RealmProvider schema={schemas} schemaVersion={1}>
        <SafeAreaProvider>
          <SafeAreaView style={globalStyles.container}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) =>
                  tabIconSetter(route, color, size),
                headerShown: false,
                tabBarActiveTintColor: "#9DC292",
                tabBarInactiveTintColor: "#868D84",
              })}
            >
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="Projects" component={ProjectsStackScreen} />
            </Tab.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </RealmProvider>
    </NavigationContainer>
  );
}
