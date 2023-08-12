import axios from 'axios';
import { OPEN_WEATHER_API_URL } from './constants';

const baseUrl = OPEN_WEATHER_API_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export default axiosInstance;
