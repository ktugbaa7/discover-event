import { View, Text, FlatList, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { DiscoverContext } from "../../context/DiscoverContext";
import NotFound from "../NotFound/NotFound";
import Loading from "../../components/Loading/Loader";
import { SafeAreaView } from "react-native-safe-area-context";

const EventListScreen = ({ navigation }) => {
  const { eventdata, searchQuery, updateSearch, isLoading, error } =
    useContext(DiscoverContext);

  if (isLoading) return <Loading />;

  if (error) return <NotFound />;

  const goToDetails = (id) => {
    navigation.navigate('Details', {id:id})
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 10, backgroundColor: "orange" }}>
        <Searchbar
          placeholder="Mekan, tür veya kişi ara"
          onChangeText={updateSearch}
          value={searchQuery}
          mode="bar"
          iconColor="grey"
          rippleColor={"grey"}
          placeholderTextColor={"grey"}
        />
      </View>

      <View>
        <FlatList
          data={eventdata}
          renderItem={({ item }) => {
            if (searchQuery === "") {
              return (
                <Pressable onPress={() => goToDetails(item)}>
                  <Image
                    source={{ uri: item.avatar }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      resizeMode: "contain",
                    }}
                  />
                  <View>
                    <Text>{item.name}</Text>
                    <Text>{item.center}</Text>
                  </View>
                </Pressable>
              );
            }

            if (
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.center.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.type.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
              return (
                <Pressable onPress={() => goToDetails(item)}>
                  <Image
                    source={{ uri: item.avatar }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      resizeMode: "contain",
                    }}
                  />
                  <View>
                    <Text>{item.name}</Text>
                    <Text>{item.center}</Text>
                  </View>
                </Pressable>
              );
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EventListScreen;
