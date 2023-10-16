import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./components/StackScreens";
import globalStyles from "./components/GlobalStyles";

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={globalStyles.container}>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
          </Tab.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
