import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './InputToWriteRange.style';
import {COLORS} from '../../constants/colors';
import PropTypes from 'prop-types';

const InputToWriteRange = ({
  upText,
  inputInfoFrom,
  inputInfoTo,
  setInputInfoFrom,
  setInputInfoTo,
}) => {
  return (
    <View style={styles.writeRange}>
      <Text style={styles.topText}>{upText}</Text>
      <View style={styles.inputView}>
        <Text style={styles.textNearInput}>From:</Text>
        <View style={styles.sectionStyle}>
          <TextInput
            defaultValue="0"
            keyboardType="numeric"
            style={styles.textInput}
            value={inputInfoFrom}
            onChangeText={setInputInfoFrom}
            placeholder="from"
            placeholderTextColor={COLORS.DIMGREY}
            autoCapitalize="none"
          />
        </View>
        <Text style={styles.textNearInput}>To:</Text>
        <View style={styles.sectionStyle}>
          <TextInput
            defaultValue="0"
            keyboardType="numeric"
            style={styles.textInput}
            value={inputInfoTo}
            onChangeText={setInputInfoTo}
            placeholder="to"
            placeholderTextColor={COLORS.DIMGREY}
            autoCapitalize="none"
          />
        </View>
      </View>
    </View>
  );
};

export default InputToWriteRange;

InputToWriteRange.propTypes = {
  upText: PropTypes.string.isRequired,
  inputInfoFrom: PropTypes.number,
  inputInfoTo: PropTypes.number,
  setInputInfoFrom: PropTypes.func.isRequired,
  setInputInfoTo: PropTypes.func.isRequired,
};
