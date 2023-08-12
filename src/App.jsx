import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import RoutesPage from './Routes';
import axiosInstance from './Utilities/axios';
import {
  OPEN_WEATHER_API_KEY,
  OPEN_WEATHER_API_URL,
} from './Utilities/constants';
import { useLocationContext } from './Context/ContextHandler';

function App() {
  const { updateNavigationData } = useLocationContext();

  async function fetchData(lat, long) {
    const response = await axiosInstance.get(
      `${OPEN_WEATHER_API_URL}?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );
    return response.data;
  }

  async function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetchData(latitude, longitude);
          updateNavigationData(response);
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
