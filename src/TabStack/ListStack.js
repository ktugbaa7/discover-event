import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../pages/DetailsScreen/DetailsScreen";
import EventListScreen from "../pages/EventList/EventListScreen";

const ListStack = createNativeStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="EventList"
        component={EventListScreen}
        options={{ headerShown: false }}
      />
      <ListStack.Screen
        name="Details"
        component={DetailsScreen}
      />
    </ListStack.Navigator>
  );
};

export default ListStackScreen;
