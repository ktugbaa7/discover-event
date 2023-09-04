import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Share,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { DiscoverContext } from "../../context/DiscoverContext";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";

const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const { eventData } = useContext(DiscoverContext);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const url = "https://www.techcareer.net/";

  // Date and time formatting
  const timestart = id.timestart;
  const dateObject = new Date(timestart);
  const formattedDateTime = dateObject.toLocaleDateString("tr-TR");

  const { width: screenWidth } = Dimensions.get("window");
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.5;

  const imageUrls = [id.img.img1, id.img.img2, id.img.img3, id.img.img4];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item ? (
        <Image style={styles.itemImg} source={{ uri: item }} />
      ) : (
        <Image
          style={styles.itemImg}
          calendarscene
          source={require("../../image/image.jpg")}
        />
      )}
    </View>
  );

  const filteredDataCenter = eventData.filter(
    (item) => item.center === selectedCenter
  );

  const categories = [
    { name: "Kategori 1", price: 600 },
    { name: "Kategori 2", price: 450 },
    { name: "Kategori 3", price: 350 },
  ];
  categories.sort((a, b) => a.price - b.price);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Etkinlik",
        message: `Etkinlik: ${id.name}\n\nMekan: ${id.center}\n\nBağlantı: ${url}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of", result.activityType);
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { latitude: mapLatitude, longitude: mapLongitude } = id;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#001C30" }}>
      <ScrollView>
        <View style={{}}>
          <Image
            style={{ width: 200, height: 200, resizeMode: "cover" }}
            source={{ uri: id.avatar }}
          />
          <Text style={styles.text}>{id.name}</Text>
          <MaterialIcons name="place" size={24} color="black" />

          <Text style={styles.text}>{id.center}</Text>

          <Text style={styles.text}>{id.description}</Text>

          <AntDesign name="rocket1" />
          <Text style={styles.text}>
            {id.free === false ? "Biletli" : "Ücretsiz"}
          </Text>

          <AntDesign name="calendar" size={24} color="black" />
          <Text style={styles.text}>{formattedDateTime}</Text>

          <View style={styles.container}>
            {id.free === false ? (
              <View style={styles.categoriesContainer}>
                {categories.map((category, index) => (
                  <Card key={index} style={styles.card}>
                    <Card.Content style={styles.cardContent}>
                      <View>
                        <Title>{category.name}</Title>
                        <Paragraph>{`${category.price} TL`}</Paragraph>
                      </View>
                      <Button mode="contained">Bilet Al</Button>
                    </Card.Content>
                  </Card>
                ))}
              </View>
            ) : (
              <View></View>
            )}
          </View>
          <Button mode="contained" onPress={onShare}>
            Paylaş
          </Button>
          <Text>Bu mekandaki etkinlikleri görmek için</Text>
          <Button mode="contained" onPress={() => setSelectedCenter(id.center)}>
            tıkla
          </Button>
          <View>
            {selectedCenter && (
              <FlatList
                data={filteredDataCenter}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View>
                    <Text>{item.name}</Text>
                  </View>
                )}
              />
            )}
          </View>
        </View>
        <View>
          <Carousel
            layout="default"
            data={imageUrls}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
        </View>
        <View style={styles.containerMaps}>
          <MapView
            style={styles.map}
            region={{
              latitude: mapLatitude,
              longitude: mapLongitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.09,
            }}
          >
            <Marker
              coordinate={{
                latitude: mapLatitude,
                longitude: mapLongitude,
              }}
              title={id.center}
              description="Bu etkinliğin adresi burasıdır."
            />
          </MapView>
        </View>
        <View>
          <TouchableOpacity>
            <Text>afdasdas</Text>
            <Text>sdffsdfsd</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    height: 300,
    borderRadius: 10,
  },
  itemImg: {
    width: 200,
    height: 200,
    borderRadius: 8,
    resizeMode: "cover",
  },
  text: {
    color: "#DAFFFB",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  categoriesContainer: {
    gap: 5,
    marginBottom: 16,
  },
  card: {
    flex: 1,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerMaps: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: 350,
    height: 250,
  },
});

export default DetailsScreen;
