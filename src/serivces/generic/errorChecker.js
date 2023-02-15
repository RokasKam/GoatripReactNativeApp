import {Alert} from 'react-native';

export const errorChecker = async functionToCheck => {
  try {
    await functionToCheck();
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      Alert.alert(errors[Object.keys(errors)[0]][0]);
    } else {
      Alert.alert(error.response.data.Message);
    }
  }
};
