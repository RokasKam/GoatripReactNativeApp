import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Button.style';
import PropTypes from 'prop-types';

const Button = ({buttonText, onClickAction}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onClickAction}>
      <Text style={styles.loginText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
};
