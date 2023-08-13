import { useLocationContext } from '../../Context/ContextHandler';
import { convertToDateString } from '../../Utilities/utilityFunctions';
import styles from './dailyForecast.module.css';

const weatherIconUrl = process.env.REACT_APP_OPEN_WEATHER_ICON_URL;

function DailyForecast() {
  const { locationData, forecastData } = useLocationContext();

  const date = convertToDateString(locationData?.dt);

  return (
    <div className={styles.dataContainer}>
      <div className={styles.currentData}>
        <div className={styles.cityName}>{locationData?.name}</div>
        <div className={styles.weatherConditionMain}>
          {locationData?.weather?.[0]?.main}
        </div>
        <div className={styles.weatherConditionDescription}>
          {locationData?.weather?.[0]?.description}
        </div>
        <img
          className={styles.weatherConditionImage}
          alt={`{locationData?.weather[0]?.description}`}
          src={`${weatherIconUrl}${locationData?.weather?.[0]?.icon}.png`}
        ></img>
        <div className={styles.currentDate}>{date}</div>
        <div className={styles.temperatureContainer}>
          <div className={styles.temperature}>{locationData?.main?.temp}</div>
          <div className={styles.degreeSymbol}>&#8451;</div>
        </div>
      </div>
      <div className={styles.infoTitle}>Forecast Data for Today</div>
      <div className={styles.forecastData}>
        {forecastData?.map((data, index) => {
          const date = convertToDateString(data?.dt);
          if (index < 5) {
            return (
              <div className={styles.forecastItem}>
                <div className={styles.forecastTempContainer}>
                  <div className={styles.forecastTemperature}>
                    {data?.main?.temp}
                  </div>
                  <div>&#8451;</div>
                </div>
                <div className={styles.forecastWeatherMain}>
                  {data?.weather?.[0]?.main}
                </div>
                <div>{date.split(' ')[4]}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default DailyForecast;
