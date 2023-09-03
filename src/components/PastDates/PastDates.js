import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DiscoverContext } from "../../context/DiscoverContext";

const PastDatesList = () => {
  const { eventData } = useContext(DiscoverContext);

  const currentDate = new Date();
  const pastDates = eventData.filter((item) => {
    const itemDate = new Date(item.timestart);
    return itemDate < currentDate;
  });

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <FlatList
          data={pastDates}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.center}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default PastDatesList;
