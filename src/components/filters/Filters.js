import {Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import placesCategories from '../../constants/placesCategories';
import styles from './Filters.style';
import {COLORS} from '../../constants/colors';
import PropTypes from 'prop-types';

const Filters = ({selectedCategory, currentFilterChanger}) => {
  return (
    <FlatList
      style={styles.container}
      horizontal={true}
      data={placesCategories}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.item,
            {
              backgroundColor:
                item.label === selectedCategory
                  ? COLORS.MAIN_GREEN
                  : COLORS.WHITE,
              borderWidth: item.label === selectedCategory ? 0 : 0.5,
            },
          ]}
          onPress={() => currentFilterChanger(item.label)}>
          <Text
            style={[
              styles.title,
              {
                color:
                  item.label === selectedCategory
                    ? COLORS.WHITE
                    : COLORS.DIMGREY,
              },
            ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Filters;

Filters.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  currentFilterChanger: PropTypes.func.isRequired,
};
