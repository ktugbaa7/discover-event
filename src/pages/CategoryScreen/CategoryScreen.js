import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DiscoverContext } from "../../context/DiscoverContext";
import { SafeAreaView } from "react-native-safe-area-context";

const CategoryScreen = ({ route, navigation }) => {
  const { eventData } = useContext(DiscoverContext);
  const [categoryEvents, setCategoryEvents] = useState([]);

  const goToDetails = (id) => {
    navigation.navigate("Detay", { id: id });
  };

  useEffect(() => {
    const category = route.params.category || {};
    const filteredEvents = eventData.filter(
      (event) => event.type === category.title
    );
    setCategoryEvents(filteredEvents);
  }, [route.params]);

  return (
    <SafeAreaView>
    <ScrollView>
      <View>
        <Text>{route.params.category.title} Etkinlikleri</Text>
        <FlatList
          data={categoryEvents}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => goToDetails(item)}>
              <View style={{ padding: 16 }}>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
