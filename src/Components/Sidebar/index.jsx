import { Link, useLocation } from 'react-router-dom';
import styles from './sidebar.module.css';

function Sidebar() {
  const location = useLocation();
  return (
    <div className={styles.sidebar}>
      <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
        Daily Forecast
      </Link>
      <Link
        to="/weather-map"
        className={location.pathname === '/weather-map' ? styles.active : ''}
      >
        Weather Map
      </Link>
    </div>
  );
}

export default Sidebar;
