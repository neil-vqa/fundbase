import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
    </HomeStack.Navigator>
  );
}

export { HomeStackScreen };
