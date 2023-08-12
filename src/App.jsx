import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import RoutesPage from './Routes';
import axiosInstance from './Utilities/axios';
import { useLocationContext } from './Context/ContextHandler';

const openWeatherApiUrl = process.env.REACT_APP_OPEN_WEATHER_API_URL;
const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

function App() {
  console.log(process.env.REACT_APP_OPEN_WEATHER_API_URL);
  const { updateLocationData } = useLocationContext();

  async function fetchData(lat, long) {
    const response = await axiosInstance.get(
      `${openWeatherApiUrl}?lat=${lat}&lon=${long}&appid=${openWeatherApiKey}&units=metric`
    );
    return response.data;
  }

  async function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetchData(latitude, longitude);
          updateLocationData(response);
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
