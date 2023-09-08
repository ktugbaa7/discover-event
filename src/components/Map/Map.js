import { View, Text } from "react-native";
import React from "react";
import styles from "./Map.style";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from '@expo/vector-icons';

const Map = ({ mapLatitude, mapLongitude, id }) => {
  return (
    <View style={styles.containerMaps}>
      <View style={styles.container}>
      <Entypo name="map" style={styles.icon} />
        <Text style={styles.text}>Haritadaki Konumu</Text>
      </View>
      <MapView
        style={styles.map}
        region={{
          latitude: mapLatitude,
          longitude: mapLongitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.09,
        }}
      >
        <Marker
          coordinate={{
            latitude: mapLatitude,
            longitude: mapLongitude,
          }}
          title={id.center}
          description="Bu etkinliğin adresi burasıdır."
        />
      </MapView>
    </View>
  );
};

export default Map;
