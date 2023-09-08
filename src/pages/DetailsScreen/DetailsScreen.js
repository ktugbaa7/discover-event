import {
  View,
  Image,
  Dimensions,
  ScrollView,
  Share,
  Text,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DiscoverContext } from "../../context/DiscoverContext";
import Loading from "../../components/Loading/Loader";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import styles from "./DetailsScreen.style";
import DetailsCard from "../../components/DetailsCard/index";
import Categories from "../../components/Categories/index";
import Slider from "../../components/Slider/index";
import Map from "../../components/Map/index";
import Events from "../../components/EventItem/index";
import { globalStyle } from "../../assets/variable";

const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const { eventData, isLoading } = useContext(DiscoverContext);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const url = "https://www.techcareer.net/";

  // Date and time formatting
  const timestart = id.timestart;
  const dateObject = new Date(timestart);
  const formattedDateTime = dateObject.toLocaleDateString("tr-TR");

  const { width: screenWidth } = Dimensions.get("window");
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.6;

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
    (item) => item.center === selectedCenter && item.id !== id.id
  );

  const starRating = id.rating;
  const renderStars = (rating) => {
    const maxRating = 10;
    const numberOfStars = 5;
    const scaledRating = (rating / maxRating) * numberOfStars;
    const filledStarsCount = Math.round(scaledRating);
    const emptyStarsCount = numberOfStars - filledStarsCount;

    const stars = [];

    for (let i = 0; i < filledStarsCount; i++) {
      stars.push(
        <AntDesign key={i} name="star" size={20} color={globalStyle.primary} />
      );
    }
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <AntDesign
          key={i + filledStarsCount}
          name="staro"
          size={20}
          color={globalStyle.primary}
        />
      );
    }
    return stars;
  };

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DetailsCard
          id={id}
          ticketshare
          formattedDateTime={formattedDateTime}
          starRating={starRating}
          renderStars={renderStars}
        />
        <View style={styles.slider}>
          <Text style={styles.text}>Fotoğraf Galerisi</Text>
        </View>
        <Slider
          data={imageUrls}
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />

        <Categories id={id} categories={categories} />
        <Button mode="contained" style={styles.button} onPress={onShare}>
          <AntDesign name="sharealt" style={styles.share} />
        </Button>

        <View style={styles.contant}>
          <Text style={styles.textHead}>
            Bu mekandaki diğer etkinlikleri görmek için
          </Text>
          <Pressable onPress={() => setSelectedCenter(id.center)}>
            <Text style={styles.pressable}>tıkla</Text>
          </Pressable>
        </View>
        {selectedCenter &&
          (filteredDataCenter.length > 0 ? (
            <Events data={filteredDataCenter} />
          ) : (
            <Text style={styles.eventText}>Bu mekanda başka etkinlik yok.</Text>
          ))}

        <Map id={id} mapLatitude={mapLatitude} mapLongitude={mapLongitude} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
