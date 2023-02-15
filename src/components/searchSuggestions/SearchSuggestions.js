import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styling} from './SearchSuggestions.style';
import PropTypes from 'prop-types';

const SearchSuggestions = ({handleSearch, searchSuggestions}) => {
  const styles = styling(searchSuggestions.length);
  return (
    <>
      {searchSuggestions.length !== 0 ? (
        <View style={styles.boxStyle}>
          <FlatList
            data={searchSuggestions}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleSearch(item, true)}>
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View style={styles.boxStyle}>
          <Text style={styles.suggestionText}>No Suggestions</Text>
        </View>
      )}
    </>
  );
};

export default SearchSuggestions;

SearchSuggestions.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchSuggestions: PropTypes.array.isRequired,
};
