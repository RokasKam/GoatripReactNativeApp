import {useCallback, useEffect} from 'react';
import {PLACES_PER_PAGE} from '../constants/globalConstants';
import {useUserPlacesContext} from '../contexts/UserPlacesContext';
import {apiService} from '../serivces/business/apiService';
import {createApiHeader} from '../serivces/business/createApiHeader';

export const useFetchUserPlaces = (currentPage, token, isFocused) => {
  const {setUserPlaces, setIsLoading} = useUserPlacesContext();
  const getUserPlaces = useCallback(async () => {
    const params = {
      PageNumber: currentPage,
      PageSize: PLACES_PER_PAGE,
    };
    setIsLoading(true);
    const response = await apiService.fetchUserPlaces(
      params,
      createApiHeader(token),
    );
    setIsLoading(false);
    setUserPlaces(state => [...state, ...response.data]);
  }, [currentPage, setIsLoading, setUserPlaces, token]);

  useEffect(() => {
    if (isFocused) {
      getUserPlaces();
    }
  }, [isFocused, getUserPlaces]);
};
