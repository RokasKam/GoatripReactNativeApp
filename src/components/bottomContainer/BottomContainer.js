import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Rating} from 'react-native-ratings';
import styles from './BottomContainer.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useUserContext} from '../../contexts/UserContext';
import {COLORS} from '../../constants/colors';
import {usePlacesContext} from '../../contexts/PlaceContext';
import {useUserPlacesContext} from '../../contexts/UserPlacesContext';
import {apiService} from '../../serivces/business/apiService';
import {createApiHeader} from '../../serivces/business/createApiHeader';
import {errorChecker} from '../../serivces/generic/errorChecker';
import PropTypes from 'prop-types';

const BottomContainer = ({item, isUserList, isRatingDisabled}) => {
  const navigation = useNavigation();
  const {updateAPlace} = usePlacesContext();
  const {updateAUserPlace, setIsReloadNeeded} = useUserPlacesContext();
  const {user} = useUserContext();
  const [userRating, setUserRating] = useState();

  const handleUpdateRating = useCallback(
    async rating => {
      const updateRequest = {userRating: rating};
      const response = await apiService.updateRating(item.id, updateRequest);
      updateAPlace(response.data.id, response.data.rating);
      updateAUserPlace(response.data.id, response.data.rating);
    },
    [item.id, updateAPlace, updateAUserPlace],
  );

  const handleAddLikedPlace = async () => {
    const params = {placeId: item.id};
    await apiService.addLikedPlace(params, createApiHeader(user.token));
  };

  const handleRemoveLikedPlace = async () => {
    const params = {placeId: item.id};
    await apiService.removeLikedPlace(params, createApiHeader(user.token));
    setIsReloadNeeded(true);
  };

  useEffect(() => {
    if (userRating) {
      errorChecker(() => handleUpdateRating(userRating));
      setUserRating(null);
    }
  }, [handleUpdateRating, userRating]);

  return (
    <View style={styles.bottomContainer}>
      <View style={styles.row}>
        <Text style={styles.textStyle} numberOfLines={1} adjustsFontSizeToFit>
          {item.placeName}
        </Text>
        <Icon
          style={styles.icon}
          name="map-pin"
          color={COLORS.MAIN_GREEN}
          size={20}
          onPress={() => navigation.navigate('Map', {place: item})}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.ratingBlock}>
          <Rating
            readonly={isRatingDisabled}
            style={styles.rating}
            type="heart"
            ratingCount={5}
            imageSize={20}
            jumpValue={0.5}
            fractions={2}
            startingValue={item.rating}
            onFinishRating={rating => setUserRating(rating)}
          />
          <Text style={[styles.greyText, styles.rating]}>
            {item.rating.toFixed(2)} / 5.0
          </Text>
        </View>
        <Text style={styles.greyText}>{item.category}</Text>
        {isUserList === false ? (
          <Icon
            name="heart"
            color={COLORS.MAIN_GREEN}
            size={20}
            style={styles.icon}
            onPress={() => errorChecker(handleAddLikedPlace)}
          />
        ) : (
          <Icon
            name="remove"
            color={COLORS.MAIN_GREEN}
            size={25}
            style={styles.icon}
            onPress={() => errorChecker(handleRemoveLikedPlace)}
          />
        )}
      </View>
      <View style={styles.addionalInfoRow}>
        <Text style={styles.greyText}>
          {item.peopleAmountFrom} - {item.peopleAmountTo} people
        </Text>
        <Text style={styles.greyText}>
          {item.priceFrom} - {item.priceTo} Eur/pp
        </Text>
        <Text style={styles.greyText}>
          {item.visitDurationFrom} - {item.visitDurationTo} hours
        </Text>
      </View>
    </View>
  );
};

export default BottomContainer;

BottomContainer.propTypes = {
  item: PropTypes.object.isRequired,
  isUserList: PropTypes.bool.isRequired,
  isRatingDisabled: PropTypes.bool.isRequired,
};
