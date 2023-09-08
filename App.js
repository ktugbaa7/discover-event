import { NavigationContainer } from "@react-navigation/native";
import { DiscoverProvider } from "./src/context/DiscoverContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./src/TabStack/HomeStack";
import ListStackScreen from "./src/TabStack/ListStack";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DiscoverProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: "#f1f1f1" },
            tabBarActiveTintColor: "#2ed87b"
          }}
        >
          <Tab.Screen
            name="Anasayfa"
            component={HomeStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Ara"
            component={ListStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="search1" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </DiscoverProvider>
  );
}
