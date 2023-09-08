import { View, Text } from "react-native";
import React from "react";
import styles from "./DetailsCard.style";
import { Image } from "react-native";
import {
  AntDesign,
  Entypo,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const DetailsCard = ({ id, formattedDateTime, starRating, renderStars }) => {
  return (
    <View style={styles.card_container}>
      <Image style={styles.image} source={{ uri: id.avatar }} />
      <Text style={styles.text_title}>{id.name}</Text>
      <View style={styles.center}>
        <FontAwesome5 name="tag" style={styles.tag} />
        <Text style={styles.type}>{id.type}</Text>
      </View>
      <View style={styles.center}>
        <MaterialIcons name="place" style={styles.place} />
        <Text style={styles.text_center}>{id.center}</Text>
      </View>
      <Text style={styles.text}>{id.description}</Text>
      <View style={styles.free}>
        <Entypo esign name="ticket" style={styles.ticket} />
        <Text style={styles.text}>
          {id.free === false ? "Biletli" : "Ücretsiz"}
        </Text>
      </View>
      <View style={styles.date}>
        <AntDesign name="calendar" style={styles.calendar} />
        <Text style={styles.text_time}>{formattedDateTime}</Text>
      </View>
      <View style={styles.rating}>
        <View style={styles.starRatingContainer}>
          {renderStars(starRating)}
        </View>
      </View>
    </View>
  );
};

export default DetailsCard;
