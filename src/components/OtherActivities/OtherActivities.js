import { View, Text } from "react-native";
import React from "react";
import styles from "./OrherActivities.style";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";

const OtherActivities = ({
  id,
  setSelectedCenter,
  selectedCenter,
  filteredDataCenter,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contant}>
        <Text style={styles.text}>Bu mekandaki etkinlikleri görmek için</Text>
        <Pressable onPress={() => setSelectedCenter(id.center)}>
          <Text style={styles.pressable}>tıkla</Text>
        </Pressable>
      </View>

      <View>
        {selectedCenter && (
          <FlatList
            data={filteredDataCenter}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable onPress={() => goToDetails(item)}>
                <View style={styles.eventItem}>
                  <Image style={styles.avatar} source={{ uri: item.avatar }} />
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
            )}
          />
        )}
      </View>
    </View>
  );
};

export default OtherActivities;
