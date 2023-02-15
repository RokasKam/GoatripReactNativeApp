import {useEffect} from 'react';
import {useUserPlacesContext} from '../contexts/UserPlacesContext';

export const useReload = (navigation, setCurrentPage) => {
  const {setUserPlaces, isReloadNeeded, setIsReloadNeeded} =
    useUserPlacesContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUserPlaces([]);
      setCurrentPage(1);
    });
    return unsubscribe;
  }, [navigation, setCurrentPage, setUserPlaces]);

  useEffect(() => {
    if (isReloadNeeded) {
      setUserPlaces([]);
      setCurrentPage(1);
      setIsReloadNeeded(false);
    }
  }, [isReloadNeeded, setCurrentPage, setIsReloadNeeded, setUserPlaces]);
};
