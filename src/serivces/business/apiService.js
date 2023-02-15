import axios from 'axios';
import {
  API_ENDPOINTS_PLACES,
  API_ENDPOINTS_USER,
} from '../../constants/apiEndpoints';
import Config from 'react-native-config';

const fetchPlaces = params =>
  axios.get(`${Config.REACT_APP_API}${API_ENDPOINTS_PLACES.GET_ALL}`, {
    params: params,
  });

const updateRating = (id, updateRequest) =>
  axios.put(
    `${Config.REACT_APP_API}${API_ENDPOINTS_PLACES.UPDATE}${id}`,
    updateRequest,
  );

const uploadNewPlace = place =>
  axios.post(`${Config.REACT_APP_API}${API_ENDPOINTS_PLACES.CREATE}`, place);

const fetchSuggestions = params =>
  axios.get(`${Config.REACT_APP_API}${API_ENDPOINTS_PLACES.GET_SUG}`, {
    params: params,
  });

const fetchUserPlaces = (params, headers) =>
  axios.get(`${Config.REACT_APP_API}${API_ENDPOINTS_USER.GET_USER_PLACES}`, {
    params: params,
    headers: headers,
  });

const addLikedPlace = (params, headers) =>
  axios.post(`${Config.REACT_APP_API}${API_ENDPOINTS_USER.ADD_LIKED}`, null, {
    params: params,
    headers: headers,
  });

const removeLikedPlace = (params, headers) =>
  axios.delete(`${Config.REACT_APP_API}${API_ENDPOINTS_USER.REMOVE_LIKED}`, {
    params: params,
    headers: headers,
  });

const login = loginInfo =>
  axios.post(`${Config.REACT_APP_API}${API_ENDPOINTS_USER.LOGIN}`, loginInfo);

const fetchUserInfo = headers =>
  axios.get(`${Config.REACT_APP_API}${API_ENDPOINTS_USER.GET_ME}`, {
    headers: headers,
  });

const register = registerInfo =>
  axios.post(
    `${Config.REACT_APP_API}${API_ENDPOINTS_USER.REGISTER}`,
    registerInfo,
  );

export const apiService = {
  fetchPlaces,
  updateRating,
  uploadNewPlace,
  fetchSuggestions,
  fetchUserPlaces,
  addLikedPlace,
  removeLikedPlace,
  login,
  fetchUserInfo,
  register,
};
