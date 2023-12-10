import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './LoadingAnimation.style';
import {COLORS} from '../../constants/colors';
import PropTypes from 'prop-types';

const LoadingAnimation = ({loadingText}) => {
  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator size="large" color={COLORS.DARK_BLUE} />
      <Text style={styles.indicatorText}>{loadingText}</Text>
    </View>
  );
};

export default LoadingAnimation;

LoadingAnimation.propTypes = {
  loadingText: PropTypes.string.isRequired,
};
