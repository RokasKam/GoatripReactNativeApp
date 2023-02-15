import {View, Pressable, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchInput.style';
import {COLORS} from '../../constants/colors';
import PropTypes from 'prop-types';

const SearchInput = ({
  searchTerm,
  setSearchTerm,
  isSearchAplied,
  handleSearch,
}) => {
  return (
    <View style={styles.sectionStyle}>
      {isSearchAplied && (
        <Pressable
          onPress={() => {
            handleSearch(null, false);
          }}>
          <Image
            source={require('../../assets/img/arrowBack.png')}
            style={styles.backArrowImageStyle}
          />
        </Pressable>
      )}
      <TextInput
        style={styles.textInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder={'Search Goatrip places...'}
        placeholderTextColor={COLORS.DIMGREY}
        autoCapitalize="none"
        returnKeyType="search"
        onSubmitEditing={event => handleSearch(event.nativeEvent.text, true)}
      />
      <Pressable
        onPress={() => {
          handleSearch(searchTerm, true);
        }}>
        <Image
          source={require('../../assets/img/searchIcon.png')}
          style={styles.imageStyle}
        />
      </Pressable>
    </View>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  isSearchAplied: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
