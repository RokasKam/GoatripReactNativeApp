import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './AddLocation.style';
import Modal from 'react-native-modal';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Config from 'react-native-config';
import {
  DEFAULT_LATITUDE_DELTA,
  DEFAULT_LATITUDE_DELTA_FOR_PLACE,
  DEFAULT_LONGITUDE_DELTA,
  DEFAULT_LONGITUDE_DELTA_FOR_PLACE,
} from '../../constants/globalConstants';
import PropTypes from 'prop-types';

const AddLocation = ({isVisible, onClose, place, setPlace}) => {
  const [isMarkerNeeded, setIsMarkerNeeded] = useState(false);

  const handlePlacePress = details => {
    setIsMarkerNeeded(true);
    setPlace({
      ...place,
      latitude: details.geometry.location.lat,
      longtitude: details.geometry.location.lng,
    });
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <View style={styles.modalView}>
        <View style={styles.mapBlock}>
          <View style={styles.searchBlock}>
            <GooglePlacesAutocomplete
              placeholder="Search for a place adress"
              fetchDetails={true}
              styles={{
                textInput: styles.textInput,
                separator: styles.seperator,
                powered: styles.powered,
                description: styles.description,
              }}
              onPress={(data, details = null) => handlePlacePress(details)}
              query={{
                key: Config.GOOGLE_API_KEY,
                language: 'en',
              }}
            />
          </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: place.latitude,
              longitude: place.longtitude,
              latitudeDelta: isMarkerNeeded
                ? DEFAULT_LATITUDE_DELTA_FOR_PLACE
                : DEFAULT_LATITUDE_DELTA,
              longitudeDelta: isMarkerNeeded
                ? DEFAULT_LONGITUDE_DELTA_FOR_PLACE
                : DEFAULT_LONGITUDE_DELTA,
            }}>
            {isMarkerNeeded && (
              <Marker
                coordinate={{
                  latitude: place.latitude,
                  longitude: place.longtitude,
                }}
              />
            )}
          </MapView>
        </View>
      </View>
    </Modal>
  );
};

export default AddLocation;

AddLocation.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
  setPlace: PropTypes.func.isRequired,
};
