import { GoogleMap, OverlayView } from '@react-google-maps/api';
import { useLocationContext } from '../../Context/ContextHandler';
import styles from './map.module.css';

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
          src="https://tile.openweathermap.org/map/temp_new/0/0/0.png?appid=b91ac7d5c101d2ba71cdbcb7d960bf42"
        ></img>
      </OverlayView>
    </GoogleMap>
  );
}

export default Map;
