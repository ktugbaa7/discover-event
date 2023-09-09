import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        autoPlay
        loop
        style={{
          height: 410,
        }}
        source={require("./animation1.json")}
      />
    </View>
  );
};

export default Loader;
