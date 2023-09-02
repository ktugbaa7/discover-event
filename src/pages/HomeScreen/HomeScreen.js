import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import Carousel from "react-native-snap-carousel";
import { DiscoverContext } from "../../context/DiscoverContext";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  const { eventData } = useContext(DiscoverContext);

  const { width: screenWidth } = Dimensions.get("window");
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.5;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImg} source={{ uri: item.avatar }} />
      <Text style={styles.itemTitle} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.itemCenter} numberOfLines={1}>
        {item.center}
      </Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
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
        <View>
          <View>
            <Text>kategoriler</Text>
          </View>
        </View>
      </ScrollView>
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
  itemTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    padding: 10,
  },
});

export default HomeScreen;
