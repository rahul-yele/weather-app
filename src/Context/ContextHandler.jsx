import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext({});

export function LocationContextProvider(props) {
  const [locationData, setLocationData] = useState({});

  const updateLocationData = (data) => {
    setLocationData({ ...data });
  };

  const values = { locationData, updateLocationData };

  return <LocationContext.Provider value={values} {...props} />;
}

export const useLocationContext = () => useContext(LocationContext);

export default LocationContextProvider;
