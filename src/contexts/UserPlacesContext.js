import React, {createContext, useContext, useState} from 'react';

const UserPlacesContextVar = createContext();

export const useUserPlacesContext = () => {
  return useContext(UserPlacesContextVar);
};
export const UserPlacesContext = ({children}) => {
  const [userPlaces, setUserPlaces] = useState([]);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateAUserPlace = (id, rating) => {
    setUserPlaces(state =>
      state.map(place =>
        place.id === id ? {...place, rating: rating} : place,
      ),
    );
  };
  return (
    <UserPlacesContextVar.Provider
      value={{
        userPlaces,
        setUserPlaces,
        updateAUserPlace,
        isReloadNeeded,
        setIsReloadNeeded,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </UserPlacesContextVar.Provider>
  );
};
