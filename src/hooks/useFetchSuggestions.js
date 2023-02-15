import {useCallback, useEffect} from 'react';
import {apiService} from '../serivces/business/apiService';
import {errorChecker} from '../serivces/generic/errorChecker';

export const useFetchSuggestions = (
  searchTerm,
  isSearchAplied,
  setSearchSuggestions,
) => {
  const getSuggestions = useCallback(async () => {
    const params = {SearchPhrase: searchTerm};
    const response = await apiService.fetchSuggestions(params);
    setSearchSuggestions(response.data);
  }, [searchTerm, setSearchSuggestions]);

  useEffect(() => {
    if (!isSearchAplied && searchTerm.length >= 3) {
      errorChecker(() => getSuggestions());
    }
  }, [getSuggestions, isSearchAplied, searchTerm]);
};
