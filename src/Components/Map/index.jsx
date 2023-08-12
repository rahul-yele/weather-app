import { GoogleMap, OverlayView } from '@react-google-maps/api';
import { useLocationContext } from '../../Context/ContextHandler';
import styles from './map.module.css';
import {
  OPEN_WEATHER_API_KEY,
  OPEN_WEATHER_MAP_URL,
} from '../../Utilities/constants';

function Map() {
  const { locationData } = useLocationContext();

  const getPixelPositionOffset = (width, height) => ({
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
          src={`${OPEN_WEATHER_MAP_URL}/temp_new/0/0/0.png?appid=${OPEN_WEATHER_API_KEY}`}
        ></img>
      </OverlayView>
    </GoogleMap>
  );
}

export default Map;
