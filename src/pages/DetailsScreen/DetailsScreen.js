import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

const DetailsScreen = ({ route }) => {
  const { id } = route.params;

  // Date and time formatting
  const timestart = id.timestart;
  const dateObject = new Date(timestart);
  const formattedDateTime = dateObject.toLocaleDateString("tr-TR");

  const { width: screenWidth } = Dimensions.get("window");
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.5;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImg} source={{ uri: item.img.img1 }} />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: 200, height: 200, resizeMode: "cover" }}
          source={{ uri: id.avatar }}
        />
        <Text>{id.name}</Text>
        <Text>{id.center}</Text>
        <Text>{id.description}</Text>
        <Text>{id.free === false ? "Biletli" : "Ücretsiz"}</Text>
        <Text>{formattedDateTime}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Carousel
          layout="default"
          data={id}
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    backgroundColor: "#F3950D",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    padding: 10,
  },
  itemImg: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 10,
    resizeMode: "contain",
  },
});

export default DetailsScreen;
