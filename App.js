import { NavigationContainer } from "@react-navigation/native";
import { DiscoverProvider } from "./src/context/DiscoverContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./src/TabStack/HomeStack";
import ProfileStackScreen from "./src/TabStack/ProfileStack";
import ListStackScreen from "./src/TabStack/ListStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DiscoverProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="List"
            component={ListStackScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </DiscoverProvider>
  );
}
