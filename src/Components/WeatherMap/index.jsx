import { useLoadScript } from '@react-google-maps/api';
import React from 'react';
import { GOOGLE_API_KEY } from '../../Utilities/constants';
import Map from '../Map';

function WeatherMap() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: GOOGLE_API_KEY });

  if (!isLoaded) return <div>Loading ...</div>;
  return (
    <div>
      <Map />
    </div>
  );
}

export default WeatherMap;
