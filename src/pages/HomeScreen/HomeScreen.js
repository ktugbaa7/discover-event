import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useContext } from "react";
import Carousel from "react-native-snap-carousel";
import { DiscoverContext } from "../../context/DiscoverContext";

const HomeScreen = ({ navigation }) => {
  const { eventData } = useContext(DiscoverContext);

  const { width: screenWidth } = Dimensions.get("window");
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.8;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImg} source={{ uri: item.avatar }} />
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemCenter}>{item.center}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
    </View>
  );

  return (
    <View>
      <View>
        <Text style={styles.title}>Popüler Etkinlikler</Text>
      </View>
      <Carousel
        layout="stack"
        data={eventData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />

      <View>
        <View>
          <Text>Etkinlikler</Text>
        </View>

      </View>
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
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 350,
  },
  itemImg: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 100,
    resizeMode: "contain",
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
