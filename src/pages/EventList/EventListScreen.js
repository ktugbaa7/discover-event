import { View, Text, FlatList, Image, Pressable, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { DiscoverContext } from "../../context/DiscoverContext";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar/index";
import styles from "./EventListScreen.style";
import ListPressable from "../../components/ListPressable";

const EventListScreen = ({ navigation }) => {
  const { eventData, searchQuery, updateSearch } = useContext(DiscoverContext);

  const goToDetails = (id) => {
    navigation.navigate("Detay", { id: id });
  };

  const [currentTab, setCurrentTab] = useState("future");
  const currentDate = new Date();
  const futureEvents = eventData.filter(
    (item) => new Date(item.timestart) > currentDate
  );
  const pastEvents = eventData.filter(
    (item) => new Date(item.timestart) <= currentDate
  );

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderItemSearch = (item) => {
    const shouldShowItem =
      searchQuery === "" ||
      [item.name, item.center, item.type].some((prop) =>
        prop.toLowerCase().includes(searchQuery.toLowerCase())
      );
    if (shouldShowItem) {
      return (
        <ListPressable item={item} goToDetails={goToDetails}/>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list_container}>
        <Text style={styles.title}>Ara</Text>
        <SearchBar updateSearch={updateSearch} searchQuery={searchQuery} />
        
        <View style={styles.tabButtons}>
          <Pressable
            style={[
              styles.tabButton,
              currentTab === "future" && styles.activeTab,
            ]}
            onPress={() => handleTabChange("future")}
          >
            <Text style={styles.tabButtonText}>Gelecek Etkinlikler</Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabButton,
              currentTab === "past" && styles.activeTab,
            ]}
            onPress={() => handleTabChange("past")}
          >
            <Text style={styles.tabButtonText}>Geçmiş Etkinlikler</Text>
          </Pressable>
        </View>
        <View>
          <FlatList
            data={currentTab === "future" ? futureEvents : pastEvents}
            style={styles.flatlist}
            refreshing={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderItemSearch(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EventListScreen;
