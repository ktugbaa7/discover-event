import React, { useContext, useState } from "react";
import { Alert, FlatList } from "react-native";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./DateRangePicker.style";
import { Button as PaperButton, List } from "react-native-paper";
import { DiscoverContext } from "../../context/DiscoverContext";
import { Image } from "react-native";
import { Pressable } from "react-native";

const DateRangePicker = () => {
  const { eventData } = useContext(DiscoverContext);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleStartDatePress = () => {
    setShowStartDatePicker(true);
  };

  const handleEndDatePress = () => {
    setShowEndDatePicker(true);
  };

  const handleStartDateChange = (selectedDate) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (selectedDate) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const renderDateEndItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleEndDateChange(item)}>
      <Text>{item.toLocaleDateString("tr-TR")}</Text>
    </TouchableOpacity>
  );
  const renderDateStartItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleStartDateChange(item)}>
      <Text>{item.toLocaleDateString("tr-TR")}</Text>
    </TouchableOpacity>
  );

  const generateDateList = () => {
    const dates = [];
    const currentDate = new Date();
    for (let i = 0; i < 200; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const handleConfirm = () => {
    if (startDate && endDate) {
      const filteredEvents = eventData.filter((item) => {
        const eventDate = new Date(item.timestart);
        return eventDate >= startDate && eventDate <= endDate;
      });

      if (filteredEvents.length > 0) {
        filteredEvents.forEach(() => {
          setFilteredEvents(filteredEvents);
        });
      } else {
        Alert.alert("Seçilen tarih aralığında etkinlik bulunamadı.");
      }
    } else {
      Alert.alert("Tarih aralığı seçilmedi.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <PaperButton
          mode="outlined"
          textColor="#5D67D3"
          icon="chevron-down"
          contentStyle={styles.content}
          onPress={handleStartDatePress}
          style={styles.paperButton}
        >
          {startDate ? startDate.toLocaleDateString("tr-TR") : " Başlangıç"}
        </PaperButton>
        <PaperButton
          mode="outlined"
          textColor="#5D67D3"
          icon="chevron-down"
          contentStyle={styles.content}
          onPress={handleEndDatePress}
          style={styles.paperButton}
        >
          {endDate ? endDate.toLocaleDateString("tr-TR") : " Bitiş"}
        </PaperButton>
        <PaperButton
          mode="outlined"
          textColor="#5D67D3"
          onPress={handleConfirm}
          style={styles.paperButton}
        >
          Onayla
        </PaperButton>
      </View>
      <View style={styles.list_container}>
        <FlatList
          data={filteredEvents}
          renderItem={({ item }) => (
            <Pressable>
              <View style={styles.eventItem}>
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <View style={styles.description}>
                  <Text style={styles.itemText} numberOfLines={2}>
                    {item.name}
                  </Text>
                  <Text style={styles.center} numberOfLines={2}>
                    {item.center}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator
        />
      </View>
      <Modal
        visible={showStartDatePicker}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowStartDatePicker(false)}
      >
        <View style={styles.modalContainer}>
          <List.Section>
            <FlatList
              data={generateDateList()}
              renderItem={renderDateStartItem}
              keyExtractor={(item) => item.toISOString()}
            />
          </List.Section>
        </View>
      </Modal>
      <Modal
        visible={showEndDatePicker}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowEndDatePicker(false)}
      >
        <View style={styles.modalContainer}>
          <List.Section>
            <FlatList
              data={generateDateList()}
              renderItem={renderDateEndItem}
              keyExtractor={(item) => item.toISOString()}
            />
          </List.Section>
        </View>
      </Modal>
    </View>
  );
};

export default DateRangePicker;
