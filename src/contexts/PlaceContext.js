import React, {createContext, useContext, useState} from 'react';

const PlacesContext = createContext();

export const usePlacesContext = () => {
  return useContext(PlacesContext);
};

export const PlaceContext = ({children}) => {
  const [places, setPlaces] = useState([]);

  const updateAPlace = (id, rating) => {
    setPlaces(state =>
      state.map(place =>
        place.id === id ? {...place, rating: rating} : place,
      ),
    );
  };

  return (
    <PlacesContext.Provider value={{places, setPlaces, updateAPlace}}>
      {children}
    </PlacesContext.Provider>
  );
};
