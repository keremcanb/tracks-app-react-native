import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle, Marker } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  return currentLocation ? (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={currentLocation.coords} />
      {/* <Circle
        center={currentLocation.coords}
        radius={50}
        strokeColor='rgba(158, 158, 255, 1.0)'
        fillColor='rgba(158, 158, 255, 0.3)'
      /> */}
      {/* <Polyline coordinates={points} /> */}
    </MapView>
  ) : (
    <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
