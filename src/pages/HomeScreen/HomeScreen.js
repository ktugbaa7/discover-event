import { View, Text, Dimensions, Image } from "react-native";
import React, { useContext } from "react";
import { DiscoverContext } from "../../context/DiscoverContext";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./HomeScreen.style";
import PastDatesList from "../../components/PastDates/PastDates";
import DateRangePicker from "../../components/DateRangePicker/DateRangePicker";
import Loading from "../../components/Loading/Loader";
import Slider from "../../components/Slider/Slider";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  const { eventData, isLoading } = useContext(DiscoverContext);

  const { width: screenWidth } = Dimensions.get("window");
  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.8;

  const currentDate = new Date();
  const pastDates = eventData.filter((item) => {
    const itemDate = new Date(item.timestart);
    return itemDate < currentDate;
  });

  const popularItems = eventData.slice(0, 5);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImg} source={{ uri: item.avatar }} />
      <View style={styles.description}>
        <Text style={styles.itemTitle} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.itemCenter} numberOfLines={2}>
          {item.center}
        </Text>
      </View>
    </View>
  );

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text style={styles.title}>Popüler Etkinlikler</Text>

          <Slider
            data={popularItems}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
          <Text style={styles.past_text}>Tarihe Göre Etkinlik Bul</Text>
          <DateRangePicker />

          <Text style={styles.past_text}>Geçmiş Etkinlikler</Text>
          <PastDatesList pastDates={pastDates} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
