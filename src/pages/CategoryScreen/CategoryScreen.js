import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { DiscoverContext } from "../../context/DiscoverContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import styles from "./CategoryScreen.style";

const CategoryScreen = ({ route, navigation }) => {
  const { eventData, formatDate } = useContext(DiscoverContext);
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
    <SafeAreaView style={styles.container}>
     
        <View style={styles.list_container}>
          <Text style={styles.text}>{route.params.category.title} etkinlikleri</Text>
          <FlatList
            data={categoryEvents}
            refreshing={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable onPress={() => goToDetails(item)}>
                <View style={styles.eventItem}>
                  <Image style={styles.avatar} source={{ uri: item.avatar }} />
                  <View style={styles.description}>
                    <Text style={styles.itemText} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <View style={styles.content}>
                      <MaterialIcons name="place" style={styles.icon} />
                      <Text style={styles.center} numberOfLines={1}>
                        {item.center}
                      </Text>
                    </View>
                    <View style={styles.content}>
                      <AntDesign name="calendar" style={styles.icon} />
                      <Text style={styles.center}>
                        {formatDate(item.timestart)}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
    
    </SafeAreaView>
  );
};

export default CategoryScreen;
