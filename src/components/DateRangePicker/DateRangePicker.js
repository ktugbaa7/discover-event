import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./DateRangePicker.style";
import { Button } from "react-native-paper";
import { DiscoverContext } from "../../context/DiscoverContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import ListPressable from "../ListPressable";

const DateRangePicker = ({ navigation }) => {
  const { eventData } = useContext(DiscoverContext);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const minDate = new Date();

  const goToDetails = (id) => {
    navigation.navigate("Detay", { id: id });
  };

  const showDatePicker = (type) => {
    type === "start"
      ? setShowStartDatePicker(true)
      : setShowEndDatePicker(true);
  };
  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(false);
    setSelectedStartDate(selectedDate || selectedStartDate);
  };
  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(false);
    setSelectedEndDate(selectedDate || selectedEndDate);
  };

  const filteredEvents = eventData.filter((item) => {
    const eventDate = new Date(item.timestart);
    return eventDate >= selectedStartDate && eventDate <= selectedEndDate;
  });

  const sortedEvents = [...filteredEvents].sort(
    (event1, event2) =>
      new Date(event1.timestart).getTime() -
      new Date(event2.timestart).getTime()
  );
  useEffect(() => {
    filteredEvents.sort(
      (event1, event2) =>
        new Date(event1.timestart) - new Date(event2.timestart)
    );
  }, [selectedStartDate, selectedEndDate]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button
          style={styles.button}
          rippleColor="white"
          icon={() => <Fontisto name="date" style={styles.date} />}
          onPress={() => showDatePicker("start")}
        >
          <Text style={styles.text}>
            {selectedStartDate
              ? selectedStartDate.toLocaleDateString("tr-TR")
              : "Başlangıç"}
          </Text>
        </Button>
        <Button
          style={styles.button}
          rippleColor="white"
          icon={() => <Fontisto name="date" style={styles.date} />}
          onPress={() => showDatePicker("end")}
        >
          <Text style={styles.text}>
            {selectedEndDate
              ? selectedEndDate.toLocaleDateString("tr-TR")
              : "Bitiş"}
          </Text>
        </Button>
      </View>
      {showStartDatePicker && (
        <DateTimePicker
          value={selectedStartDate}
          mode="date"
          display="calendar"
          minimumDate={minDate}
          onChange={handleStartDateChange}
        />
      )}
      {showEndDatePicker && (
        <DateTimePicker
          value={selectedEndDate}
          mode="date"
          display="calendar"
          minimumDate={minDate}
          onChange={handleEndDateChange}
        />
      )}
      <FlatList
        data={sortedEvents}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        refreshing={true}
        contentContainerStyle={{ paddingVertical: 20 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListPressable item={item} goToDetails={goToDetails} />}
      />
    </View>
  );
};

export default DateRangePicker;
