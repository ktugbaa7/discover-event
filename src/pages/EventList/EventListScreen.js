import { View, Text, FlatList, Image, Pressable, Switch } from "react-native";
import React, { useContext, useState } from "react";
import { DiscoverContext } from "../../context/DiscoverContext";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./EventListScreen.style";

const EventListScreen = ({ navigation }) => {
  const { eventData, searchQuery, updateSearch } = useContext(DiscoverContext);

  const [isFreeEvent, setIsFreeEvent] = useState(false);
  const filteredEventData = eventData.filter((event) => {
    if (isFreeEvent) {
      return event.free === true;
    }
    return true;
  });

  const goToDetails = (id) => {
    navigation.navigate("Details", { id: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list_container}>
        <Text style={styles.title}>Ara</Text>
        <SearchBar updateSearch={updateSearch} searchQuery={searchQuery} />

        <View style={styles.switch}>
          <Text style={styles.switch_text}>Ücretsiz Etkinlikleri Göster</Text>
          <Switch
            value={isFreeEvent}
            onValueChange={(value) => setIsFreeEvent(value)}
            thumbColor={isFreeEvent ? "#593F76" : "#454545"}
            trackColor={{ false: "#313131", true: "#3E3549" }}
          />
        </View>
        <View>
          <FlatList
            data={filteredEventData}
            style={styles.flatlist}
            refreshing={true}
            contentContainerStyle={{ paddingBottom: 150 }}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={() => {
              if (searchQuery !== "" || filteredEventData.length === 0) {
                return <Text style={styles.errorText}>Sonuç Bulunamadı</Text>;
              }
              return null;
            }}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item }) => {
              if (searchQuery === "") {
                return (
                  <Pressable onPress={() => goToDetails(item)}>
                    <View style={styles.eventItem}>
                      <Image
                        style={styles.avatar}
                        source={{ uri: item.avatar }}
                      />
                      <View style={styles.description}>
                        <Text style={styles.itemText} numberOfLines={2}>
                          {item.name}
                        </Text>
                        <Text style={styles.center} numberOfLines={2}>
                          {item.center}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              }

              if (
                [item.name, item.center, item.type].some((prop) =>
                  prop.toLowerCase().includes(searchQuery.toLowerCase())
                )
              ) {
                return (
                  <Pressable onPress={() => goToDetails(item)}>
                    <View style={styles.eventItem}>
                      <Image
                        style={styles.avatar}
                        source={{ uri: item.avatar }}
                      />
                      <View style={styles.description}>
                        <Text style={styles.itemText} numberOfLines={2}>
                          {item.name}
                        </Text>
                        <Text style={styles.center} numberOfLines={2}>
                          {item.center}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EventListScreen;
