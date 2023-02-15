import Geolocation from '@react-native-community/geolocation';
import {Alert, PermissionsAndroid} from 'react-native';
import {platform} from './platform';
import {userPermissionAndroid} from './userPermissionAndroid';

export const currentUserLocationGetter = (setPosition, setWatchID) => {
  let granted = null;
  if (platform.isAndroid()) {
    granted = userPermissionAndroid();
  }
  if (granted === PermissionsAndroid.RESULTS.GRANTED || platform.isIos()) {
    const watchID = Geolocation.watchPosition(
      info =>
        setPosition({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        }),
      error => Alert.alert('Something went wrong'),
      {enableHighAccuracy: true, timeout: 20000},
    );
    setWatchID(watchID);
  } else {
    Alert.alert('Permision denied');
  }
};
