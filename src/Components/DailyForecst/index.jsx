import { useLocationContext } from '../../Context/ContextHandler';
import { OPEN_WEATHER_ICON_URL } from '../../Utilities/constants';
import styles from './dailyForecast.module.css';

function DailyForecast() {
  const { locationData } = useLocationContext();

  return (
    <div>
      <div className={styles.cityName}>{locationData?.name}</div>
      <div className={styles.weatherConditionMain}>
        {locationData?.weather?.[0]?.main}
      </div>
      <div className={styles.weatherConditionDescription}>
        {locationData?.weather?.[0]?.description}
      </div>
      <img
        alt={`{locationData?.weather[0]?.description}`}
        src={`${OPEN_WEATHER_ICON_URL}${locationData?.weather?.[0]?.icon}.png`}
      ></img>
      <div className={styles.temperatureContainer}>
        <div className={styles.temperature}>{locationData?.main?.temp}</div>
        <div className={styles.degreeSymbol}>&#8451;</div>
      </div>
    </div>
  );
}

export default DailyForecast;
