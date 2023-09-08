import { View, Text, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { DiscoverContext } from "../../context/DiscoverContext";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import styles from "./ListPressable.style";

const ListPressable = (props) => {
    const { formatDate } = useContext(DiscoverContext);
  return (
    <Pressable onPress={() => props.goToDetails(props.item)}>
      <View style={styles.eventItem}>
        <Image style={styles.avatar} source={{ uri: props.item.avatar }} />
        <View style={styles.description}>
          <Text style={styles.itemText} numberOfLines={1}>
            {props.item.name}
          </Text>
          <View style={styles.content}>
            <MaterialIcons name="place" style={styles.icon} />
            <Text style={styles.center} numberOfLines={1}>
              {props.item.center}
            </Text>
          </View>
          <View style={styles.content}>
            <AntDesign name="calendar" style={styles.icon} />
            <Text style={styles.center}>{formatDate(props.item.timestart)}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ListPressable;
