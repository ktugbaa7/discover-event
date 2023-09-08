import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../pages/DetailsScreen/index";
import EventListScreen from "../pages/EventList/EventListScreen";
import { DiscoverContext } from "../context/DiscoverContext";
import NotFound from "../pages/NotFound/NotFound";

const ListStack = createNativeStackNavigator();

const ListStackScreen = () => {
  const { error } = useContext(DiscoverContext);

  if (error) {
    return <NotFound />;
  }

  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="EventList"
        component={EventListScreen}
        options={{ headerShown: false }}
      />
      <ListStack.Screen name="Detay" component={DetailsScreen} />
    </ListStack.Navigator>
  );
};

export default ListStackScreen;
