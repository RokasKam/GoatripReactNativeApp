import {View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './MapScreen.style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import BottomContainer from '../../components/bottomContainer/BottomContainer';
import {currentUserLocationGetter} from '../../serivces/generic/currentUserLocationGetter';
import MapViewDirections from 'react-native-maps-directions';
import Button from '../../components/button/Button';
import Geolocation from '@react-native-community/geolocation';
import {COLORS} from '../../constants/colors';
import Config from 'react-native-config';
import {
  DEFAULT_LATITUDE_DELTA_FOR_PLACE,
  DEFAULT_LONGITUDE_DELTA_FOR_PLACE,
} from '../../constants/globalConstants';
import PropTypes from 'prop-types';

const NEEDED_ACTION = 'marker-press';

const MapScreen = ({route}) => {
  const place = route.params.place;
  const placeLocation = {
    latitude: place.latitude,
    longitude: place.longtitude,
  };
  const [isPlaceClicked, setIsPlaceClicked] = useState(false);
  const [isNavigationNeeded, setIsNavigationNeeded] = useState(false);
  const [watchID, setWatchID] = useState(0);
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const mapRef = useRef(null);

  const navigateToPlace = () => {
    setIsNavigationNeeded(true);
    mapRef.current.fitToCoordinates([position, placeLocation], {
      edgePadding: {
        top: 30,
        bottom: 70,
        right: 20,
        left: 20,
      },
    });
  };

  const changeIsPlaceClicked = event => {
    setIsPlaceClicked(event.nativeEvent.action === NEEDED_ACTION);
  };

  useEffect(() => {
    currentUserLocationGetter(setPosition, setWatchID);
  }, []);

  useEffect(() => {
    return () => {
      Geolocation.clearWatch(watchID);
      setWatchID(null);
      setPosition(null);
    };
  }, [watchID]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          onPress={changeIsPlaceClicked}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: place.latitude,
            longitude: place.longtitude,
            latitudeDelta: DEFAULT_LATITUDE_DELTA_FOR_PLACE,
            longitudeDelta: DEFAULT_LONGITUDE_DELTA_FOR_PLACE,
          }}
          showsUserLocation={isNavigationNeeded}>
          <Marker onPress={changeIsPlaceClicked} coordinate={placeLocation} />
          {isNavigationNeeded && (
            <MapViewDirections
              origin={position}
              destination={placeLocation}
              apikey={Config.GOOGLE_API_KEY}
              precision="high"
              mode="DRIVING"
              strokeColor={COLORS.DARK_BLUE}
              strokeWidth={2}
            />
          )}
        </MapView>
        {isPlaceClicked && (
          <View style={styles.infoContainer}>
            <BottomContainer
              item={place}
              isUserList={false}
              isRatingDisabled={true}
            />
            <View style={styles.buttonContainer}>
              <Button
                buttonText="Navigate to this place"
                onClickAction={navigateToPlace}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MapScreen;

MapScreen.propTypes = {
  route: PropTypes.object.isRequired,
};
