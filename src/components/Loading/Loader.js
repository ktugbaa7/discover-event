import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./Loader.style";

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} color="orange" />
    </View>
  );
};

export default Loader;
