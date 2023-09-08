import { View } from "react-native";
import React, { useRef } from "react";
import Carousel from "react-native-snap-carousel";

const Slider = (props) => {
  const carouselRef = useRef(null);

  const handleSnapToItem = (index) => {
    if (index === props.data.length - 1) {
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.snapToItem(0);
        }
      }, 3000);
    }
  };

  
  return (
    <View>
      <Carousel
        ref={carouselRef}
        layout="default"
        data={props.data}
        renderItem={props.renderItem}
        sliderWidth={props.sliderWidth}
        itemWidth={props.itemWidth}
        onSnapToItem={handleSnapToItem}
        autoplay={true}
        lockScrollWhileSnapping={true}
      />
    </View>
  );
};

export default Slider;
