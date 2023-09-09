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
        options={{
          title: 'Ara',
          headerStyle: {backgroundColor: '#5257fb'},
          headerTitleStyle: {color: '#fff', fontSize: 20, fontWeight:"bold"},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}  
      />
      <ListStack.Screen
        name="Detay"
        options={{
          title: "Detay",
          headerStyle: { backgroundColor: "#5257fb" },
          headerTitleStyle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
        component={DetailsScreen}
      />
    </ListStack.Navigator>
  );
};

export default ListStackScreen;
