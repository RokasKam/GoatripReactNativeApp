import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.style';
import {COLORS} from '../../constants/colors';
import PropTypes from 'prop-types';

const Input = ({
  placeHolder,
  isSecureTextEntryNeeded,
  text,
  handleTextChange,
}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={handleTextChange}
        placeholder={placeHolder}
        placeholderTextColor={COLORS.WHITE}
        autoCapitalize="none"
        selectionColor={COLORS.WHITE}
        secureTextEntry={isSecureTextEntryNeeded}
      />
    </View>
  );
};
export default Input;

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  isSecureTextEntryNeeded: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
};
