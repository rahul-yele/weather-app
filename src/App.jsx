import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import RoutesPage from './Routes';
import axiosInstance from './Utilities/axios';
import { useLocationContext } from './Context/ContextHandler';
import { convertToDateString } from './Utilities/utilityFunctions';

const openWeatherApiUrl = process.env.REACT_APP_OPEN_WEATHER_API_URL;
const openWeatherForecastApiUrl =
  process.env.REACT_APP_OPEN_WEATHER_FORECAST_API;
const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

function App() {
  const { updateLocationData, updateForecastData } = useLocationContext();

  async function fetchData(lat, long) {
    const response = await axiosInstance.get(
      `${openWeatherApiUrl}?lat=${lat}&lon=${long}&appid=${openWeatherApiKey}&units=metric`
    );
    const forecastResponse = await axiosInstance.get(
      `${openWeatherForecastApiUrl}?lat=${lat}&lon=${long}&appid=${openWeatherApiKey}&units=metric`
    );
    const currentData = response.data;
    const forecastData = forecastResponse.data;

    return { currentData, forecastData };
  }

  async function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const { currentData, forecastData } = await fetchData(
            latitude,
            longitude
          );
          updateLocationData(currentData);
          updateForecastData(forecastData?.list);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <main className="main-content">
        <RoutesPage />
      </main>
    </div>
  );
}

export default App;
