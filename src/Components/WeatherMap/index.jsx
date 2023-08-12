import { useLoadScript } from '@react-google-maps/api';
import React from 'react';
import Map from '../Map';

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

function WeatherMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
  });

  if (!isLoaded) return <div>Loading ...</div>;
  return (
    <div>
      <Map />
    </div>
  );
}

export default WeatherMap;
