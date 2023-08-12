import DailyForecast from '../Components/DailyForecst';
import WeatherMap from '../Components/WeatherMap';
import { Routes, Route } from 'react-router-dom';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="" element={<DailyForecast />} />
      <Route path="/weather-map" element={<WeatherMap />} />
    </Routes>
  );
};

export default RoutesPage;
