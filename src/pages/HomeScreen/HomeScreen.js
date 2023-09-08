import { View, Text, Dimensions, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { DiscoverContext } from "../../context/DiscoverContext";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./HomeScreen.style";
import DateRangePicker from "../../components/DateRangePicker/index";
import Loading from "../../components/Loading/Loader";
import Slider from "../../components/Slider/index";
import { ScrollView } from "react-native";
import Categories from "../../components/HomeCategories/index";
import Events from "../../components/EventItem/index";

const HomeScreen = ({ navigation }) => {
  const { eventData, isLoading } = useContext(DiscoverContext);

  const { width: screenWidth } = Dimensions.get("window");
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.8;

  const minimumRating = 8;
  const popularItems = eventData.filter((item) => item.rating >= minimumRating);

  const [isFreeEvent, setIsFreeEvent] = useState([]);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const formatDates = (date) => {
    return new Intl.DateTimeFormat("tr-TR").format(date);
  };
  const filterData = () => {
    const filtered = eventData.filter(
      (item) =>
        item.free === true &&
        formatDates(new Date(item.timestart)) >= formatDates(today)
    );
    setIsFreeEvent([...filtered]);
  };
  useEffect(() => {
    filterData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImg} source={{ uri: item.avatar }} />
      <View style={styles.description}>
        <Text style={styles.itemTitle} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    </View>
  );

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Popüler Etkinlikler</Text>

          <Slider
            data={popularItems}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />

          <View>
            <Categories navigation={navigation}/>
          </View>
          <Text style={styles.past_text}>Tarihe Göre Etkinlik Bul</Text>

          <DateRangePicker navigation={navigation}/>

          <Text style={styles.past_text}>Ücretsiz Etkinlikler</Text>
          <Events data={isFreeEvent}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
