import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import styles from "./Slider.style";
import Carousel, { Pagination } from "react-native-snap-carousel";

const Slider = (props) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View>
      <Carousel
        layout="default"
        data={props.data}
        renderItem={props.renderItem}
        sliderWidth={props.sliderWidth}
        itemWidth={props.itemWidth}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={props.data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "white",
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: "white",
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default Slider;
