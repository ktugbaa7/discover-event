import { View, Text, FlatList, Image, Pressable, ActivityIndicator } from "react-native";
import React, { useContext, useState } from "react";
import { DiscoverContext } from "../../context/DiscoverContext";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar/index";
import styles from "./EventListScreen.style";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const EventListScreen = ({ navigation }) => {

  const { eventData, searchQuery, updateSearch, formatDate, isLoading, resultTitle } =
    useContext(DiscoverContext);

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
                <Text style={styles.center}>{formatDate(item.timestart)}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list_container}>
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
        {isLoading ? (
          <ActivityIndicator size="medium" color="#5257fb" />
        ) : (<FlatList
            data={currentTab === "future" ? futureEvents : pastEvents}
            style={styles.flatlist}
            refreshing={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 150 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderItemSearch(item)}
            ListEmptyComponent={
              <Text style={styles.name}>{resultTitle}</Text>
            }
          />)}
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EventListScreen;
