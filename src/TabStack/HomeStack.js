import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen/DetailsScreen";
import Loading from "../components/Loading/Loader";
import NotFound from "../pages/NotFound/NotFound";
import { DiscoverContext } from "../context/DiscoverContext";
import CategoryScreen from "../pages/CategoryScreen/index";

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  const { error } = useContext(DiscoverContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NotFound />;
  }

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Kategori"
        component={CategoryScreen}
        
      />
      <HomeStack.Screen name="Detay" component={DetailsScreen} />
      <HomeStack.Screen name="NotFound" component={NotFound} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
