import { GoogleMap, OverlayView } from '@react-google-maps/api';
import { useLocationContext } from '../../Context/ContextHandler';
import styles from './map.module.css';

const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const openWeatherMapUrl = process.env.REACT_APP_OPEN_WEATHER_MAP_URL;

function Map() {
  const { locationData } = useLocationContext();

  const getPixelPositionOffset = () => ({
    x: -500,
    y: -320,
  });

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: locationData?.coord?.lat, lng: locationData?.coord?.lon }}
      mapContainerClassName={styles.mapContainer}
    >
      <OverlayView
        mapPaneName={'overlayMouseTarget'}
        position={{
          lat: locationData?.coord?.lat,
          lng: locationData?.coord?.lon,
        }}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <img
          alt=""
          className={styles.layer}
          src={`${openWeatherMapUrl}/temp_new/0/0/0.png?appid=${openWeatherApiKey}`}
        ></img>
      </OverlayView>
    </GoogleMap>
  );
}

export default Map;
