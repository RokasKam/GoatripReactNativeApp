import {PermissionsAndroid} from 'react-native';

export const userPermissionAndroid = async () => {
  try {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Goatrip Location Permission',
        message: 'We need your location in order to show route to the place',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.warn(err);
  }
};
