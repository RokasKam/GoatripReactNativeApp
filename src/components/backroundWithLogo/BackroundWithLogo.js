import {KeyboardAvoidingView, ImageBackground, Image} from 'react-native';
import styles from './BackroundWithLogo.style';
import React from 'react';
import PropTypes from 'prop-types';

const BackroundWithLogo = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/screen.png')}
      resizeMode="cover"
      style={styles.image}>
      <KeyboardAvoidingView behavior="padding" style={styles.mainBlock}>
        <Image
          source={require('../../assets/img/whiteGoatrip.png')}
          style={styles.logo}
        />
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default BackroundWithLogo;

BackroundWithLogo.propTypes = {
  children: PropTypes.object.isRequired,
};
