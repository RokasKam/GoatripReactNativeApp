import {useCallback, useEffect} from 'react';
import {PLACES_PER_PAGE} from '../constants/globalConstants';
import {usePlacesContext} from '../contexts/PlaceContext';
import {apiService} from '../serivces/business/apiService';
import {errorChecker} from '../serivces/generic/errorChecker';

export const useFetchPlaces = (
  selectedCategory,
  currentPage,
  apliedSearchTerm,
) => {
  const {setPlaces, setIsLoading} = usePlacesContext();
  useEffect(() => {
    setPlaces([]);
  }, [selectedCategory, apliedSearchTerm, setPlaces]);

  const getPlaces = useCallback(async () => {
    const params = {
      SearchPhrase: apliedSearchTerm,
      FilteringCategory: selectedCategory,
      PageNumber: currentPage,
      PageSize: PLACES_PER_PAGE,
    };
    setIsLoading(true);
    const response = await apiService.fetchPlaces(params);
    setPlaces(state => [...state, ...response.data]);
    setIsLoading(false);
  }, [
    apliedSearchTerm,
    currentPage,
    selectedCategory,
    setIsLoading,
    setPlaces,
  ]);

  useEffect(() => {
    errorChecker(() => getPlaces());
  }, [getPlaces]);
};
