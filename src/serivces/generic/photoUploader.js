import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const imageLibraryPhotoUploader = (setPhotoUri, setPhotoBase64) => {
  const options = {
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: true,
  };
  launchImageLibrary(options, response => {
    setPhotoUri(response.assets && response?.assets[0].uri);
    setPhotoBase64(
      response.assets !== undefined ? response?.assets[0].base64 : '',
    );
  });
};

export const cameraPhotoUploader = (setPhotoUri, setPhotoBase64) => {
  const options = {
    saveToPhotos: false,
    mediaType: 'photo',
    includeBase64: true,
  };
  launchCamera(options, response => {
    setPhotoUri(response.assets && response?.assets[0].uri);
    setPhotoBase64(
      response.assets !== undefined ? response?.assets[0].base64 : '',
    );
  });
};
