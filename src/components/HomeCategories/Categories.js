import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useContext } from "react";
import styles from "./Categories.style";
import { MaterialIcons } from "@expo/vector-icons";

const Categories = ({ navigation }) => {
  const categories = [
    { id: 1, title: "konser", icon: "music-note" },
    { id: 2, title: "tiyatro", icon: "theater-comedy" },
    { id: 3, title: "festival", icon: "festival" },
    { id: 4, title: "sinema", icon: "movie" },
    { id: 5, title: "stand up", icon: "local-movies" },
    { id: 6, title: "çocuk aktiviteleri", icon: "child-care" },
  ];
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.touch}
      onPress={() => navigation.navigate("Kategori", { category: item })}
    >
      <MaterialIcons name={item.icon} style={styles.icon} />
      <Text style={styles.title}>{capitalizeFirstLetter(item.title)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
