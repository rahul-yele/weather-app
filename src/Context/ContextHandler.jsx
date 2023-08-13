import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext({});

export function LocationContextProvider(props) {
  const [locationData, setLocationData] = useState({});
  const [forecastData, setForecastData] = useState([]);

  const updateLocationData = (data) => {
    setLocationData({ ...data });
  };

  const updateForecastData = (data) => {
    setForecastData(data);
  };
  const values = {
    locationData,
    updateLocationData,
    forecastData,
    updateForecastData,
  };

  return <LocationContext.Provider value={values} {...props} />;
}

export const useLocationContext = () => useContext(LocationContext);

export default LocationContextProvider;
