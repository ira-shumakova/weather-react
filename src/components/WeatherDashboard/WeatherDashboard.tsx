import WeatherSearch from '../WeatherSearch/WeatherSearch';
import classes from './WeatherDashboard.module.css';
import setLocationToLocalStorage from '../../utils/setLocation';
import setCityToLocalStorage from '../../utils/setCity';

const WeatherDashboard = () => {
  setLocationToLocalStorage();
  setCityToLocalStorage(localStorage.lat, localStorage.lon);

  return (
    <div className={classes.weatherDashboard}>
      <WeatherSearch />
    </div>
  )
}

export default WeatherDashboard;