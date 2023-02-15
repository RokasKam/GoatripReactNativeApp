import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './ProfileScreen.style';
import Places from '../../components/places/Places';
import BlurryBackround from '../../components/blurryBackround/BlurryBackround';
import {useUserContext} from '../../contexts/UserContext';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useUserPlacesContext} from '../../contexts/UserPlacesContext';
import Button from '../../components/button/Button';
import {useFetchUserPlaces} from '../../hooks/useFetchUserPlaces';
import {useReload} from '../../hooks/useReload';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {userPlaces, setUserPlaces} = useUserPlacesContext();
  const {user, setUser} = useUserContext();
  const isFocused = useIsFocused();
  const [currentPage, setCurrentPage] = useState(1);

  useReload(navigation, setCurrentPage);
  useFetchUserPlaces(currentPage, user.token, isFocused);

  const changeCurrentPage = () => setCurrentPage(currentPage + 1);

  const handleLogOut = () => {
    setUser(null);
    setUserPlaces([]);
    navigation.navigate('Login');
  };

  return (
    <BlurryBackround>
      <SafeAreaView style={styles.page}>
        <View style={styles.infoBlock}>
          <View style={styles.accountInfo}>
            <Text style={styles.textStyle}>{user.username}</Text>
            <Text style={styles.greyText}>{user.email}</Text>
          </View>
          <View style={styles.logOutButton}>
            <Button buttonText={'Log out'} onClickAction={handleLogOut} />
          </View>
        </View>
        <View style={styles.nameFavourite}>
          <Text style={styles.bigGreyText}> Liked places</Text>
        </View>
        <Places
          places={userPlaces}
          changeCurrentPage={changeCurrentPage}
          isUserPage={true}
        />
      </SafeAreaView>
    </BlurryBackround>
  );
};

export default ProfileScreen;
