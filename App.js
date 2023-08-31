import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/pages/HomeScreen/HomeScreen";
import DetailsScreen from "./src/pages/DetailsScreen/DetailsScreen";
import { DiscoverProvider } from "./src/context/DiscoverContext";
import { SearchProvider } from "./src/context/SearchContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DiscoverProvider>
      <SearchProvider>

      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ title: "Anasayfa" }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Details"
            options={{ title: "Etkinlik Detayı" }}
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </SearchProvider>
    </DiscoverProvider>
  );
}
