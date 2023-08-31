import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://64f076628a8b66ecf779b4ba.mockapi.io/api/v1/events/react-native"
      )
      .then((res) => setEventData(res.data));
  }, []);

  const { width: screenWidth } = Dimensions.get("window");
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.8;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImg} source={{ uri: item.avatar }} />
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.center}</Text>
    </View>
  );

  return (
    <View>
      <View>
        <Text style={styles.title}>Popüler Etkinlikler</Text>
      </View>
      <Carousel
        layout="default"
        data={eventData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </View>
    // <View>
    //   <Text>Popüler Etkinlikler</Text>
    //   <Button onPress={() => navigation.navigate("Details")}>Detaylar</Button>
    // </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    backgroundColor: "#F3950D",
    borderRadius: 8,
    padding:20,
    alignItems: "center",
    justifyContent: "center",
    height: 350,
  },
  itemImg: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius:100
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    padding: 10,
  },
});

export default HomeScreen;
