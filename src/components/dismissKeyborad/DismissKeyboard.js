import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const DismissKeyboard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;

DismissKeyboard.propTypes = {
  children: PropTypes.object.isRequired,
};
