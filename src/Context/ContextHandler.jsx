import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext({});

export function LocationContextProvider(props) {
  const [locationData, setLocationData] = useState({});

  const updateNavigationData = (data) => {
    setLocationData({ ...data });
  };

  const values = { locationData, updateNavigationData };

  return <LocationContext.Provider value={values} {...props} />;
}

export const useLocationContext = () => useContext(LocationContext);

export default LocationContextProvider;

/*
import React, { createContext, useContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Create a custom provider component for the context
export function MyContextProvider({ children }) {
  const [value, setValue] = useState('Default Value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook to consume the context
export function useMyContext() {
  return useContext(MyContext);
}

*/
