import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { Button as PaperButton, List } from "react-native-paper";
import Loader from "../Loading/Loader";
import { DiscoverContext } from "../../context/DiscoverContext";

const DateRangePicker = () => {
  const { isLoading, eventData } = useContext(DiscoverContext);

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
      <Text>{item.toDateString()}</Text>
    </TouchableOpacity>
  );
  const renderDateStartItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleStartDateChange(item)}>
      <Text>{item.toDateString()}</Text>
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
        console.log("Seçilen Tarih Aralığına Uyan Etkinlikler:");
        filteredEvents.forEach(() => {
          setFilteredEvents(filteredEvents);
        });
      } else {
        console.log("Seçilen tarih aralığında etkinlik bulunamadı.");
      }
    } else {
      console.log("Tarih aralığı seçilmedi.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <PaperButton
          mode="contained-tonal"
          onPress={handleStartDatePress}
          style={styles.paperButton}
        >
          Başlangıç
        </PaperButton>
        <PaperButton
          mode="contained-tonal"
          onPress={handleEndDatePress}
          style={styles.paperButton}
        >
          Bitiş Tarihi
        </PaperButton>
      </View>
      <PaperButton
        mode="contained"
        onPress={handleConfirm}
        style={styles.paperButton}
      >
        Sonuçları Göster
      </PaperButton>
      <View>
        <Text style={styles.dateText}>
          {startDate ? startDate.toDateString() : ""}
        </Text>
        <Text style={styles.dateText}>
          {endDate ? endDate.toDateString() : ""}
        </Text>
      </View>

      <Modal
        visible={showStartDatePicker}
        animationType="slide"
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
        animationType="slide"
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
      <View>
        <FlatList
          data={filteredEvents}
          renderItem={({ item }) => {
            if (isLoading) return <Loader />;
            return (
              <View style={styles.eventItem}>
                <Text>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 80,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dateText: {
    textAlign: "center",
    marginVertical: 1,
    opacity: 0.3,
  },
  modalContainer: {
    flex: 1,
    marginBottom: 300,
    marginTop: 300,
    marginLeft: 100,
    marginRight: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  eventItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  paperButton: {
    borderRadius: 8,
  },
});

export default DateRangePicker;
