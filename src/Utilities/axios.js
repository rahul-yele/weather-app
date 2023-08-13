import axios from 'axios';

const baseUrl = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

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
