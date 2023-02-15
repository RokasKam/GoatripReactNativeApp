import {ImageBackground} from 'react-native';
import React from 'react';
import styles from './BlurryBackround.styles';
import PropTypes from 'prop-types';

const BlurryBackround = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/blurryScreen.png')}
      resizeMode="cover"
      style={styles.image}>
      {children}
    </ImageBackground>
  );
};

export default BlurryBackround;

BlurryBackround.propTypes = {
  children: PropTypes.object.isRequired,
};
