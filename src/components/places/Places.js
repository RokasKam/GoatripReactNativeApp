import {View, FlatList, Image, Text} from 'react-native';
import React from 'react';
import BottomContainer from '../bottomContainer/BottomContainer';
import styles from './Places.style';
import {END_REACHED_TRESHOLD} from '../../constants/globalConstants';
import PropTypes from 'prop-types';

const Places = ({places, changeCurrentPage, isUserPage, isLoading}) => {
  return (
    <FlatList
      style={styles.list}
      data={places}
      ListEmptyComponent={
        !isLoading && (
          <View style={styles.titleView}>
            <Text style={styles.title}>The list of places is empty</Text>
          </View>
        )
      }
      removeClippedSubviews={false}
      onEndReached={changeCurrentPage}
      onEndReachedThreshold={END_REACHED_TRESHOLD}
      renderItem={({item}) => (
        <View>
          <Image
            source={{
              uri: `${item.photoUrl}`,
            }}
            style={styles.sectionImage}
          />
          <View style={styles.bottomContainer}>
            <BottomContainer
              item={item}
              isUserList={isUserPage}
              isRatingDisabled={false}
            />
          </View>
        </View>
      )}
    />
  );
};

export default Places;

Places.propTypes = {
  places: PropTypes.array.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
  isUserPage: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
