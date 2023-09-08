import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./Events.style";

const PastDatesList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image style={styles.itemImg} source={{ uri: item.avatar }} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PastDatesList;
