import { View, Text } from "react-native";
import React from "react";

const NotFound = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        404 - Sayfa Bulunamadı
      </Text>
    </View>
  );
};

export default NotFound;
