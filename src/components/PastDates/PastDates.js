import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./PastDates.style";
import { Image } from "react-native";

const PastDatesList = ({ pastDates }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        data={pastDates}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image style={styles.itemImg} source={{ uri: item.avatar }} />
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.textCenter}>{item.center}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PastDatesList;
