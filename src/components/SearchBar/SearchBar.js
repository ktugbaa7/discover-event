import { View } from "react-native";
import React from "react";
import styles from "./SearchBar.style";
import { Searchbar } from "react-native-paper";

const SearchBar = ({ updateSearch, searchQuery }) => {
  return (
    <View>
      <Searchbar
        placeholder="Mekan, tür veya kişi ara"
        onChangeText={updateSearch}
        value={searchQuery}
        mode="bar"
        iconColor="grey"
        rippleColor={"#9d9d9d"}
        placeholderTextColor={"#9d9d9d"}
        style={styles.search}
      />
    </View>
  );
};

export default SearchBar;
