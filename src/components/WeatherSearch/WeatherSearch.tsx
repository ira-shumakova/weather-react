import {useEffect, useState} from 'react';
import getWeatherByCoords from '../../utils/getForecast';
import getCoordsByCity from '../../utils/getCoords';
import WeatherDay from '../WeatherDay/WeatherDay';
import { IWeather, ICoord } from '../../dto/types';
import WeatherNextDays from '../WeatherNextDays/WeatherNextDays';
import classes from './WeatherSearch.module.css';

const WeatherSearch = () => {
  const[city, setCity] = useState<string>(localStorage.city);
  const[isLoading, setLoading] = useState<boolean>(true)
  const[coords, setCoords] = useState<ICoord>(
    {
      lat: 0,
      lon: 0,
      name: ""
    },
  );
  const [weather, setWeather] = useState<IWeather>({
    current: {
      temp: 0,
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      sunrise: 0,
      sunset: 0,
      wind_speed: 0,
      dt: 0,
      weather: [{
        description: "",
        icon: "",
        main: ""
      }]
    },
    daily: [],
  });

  useEffect(() => {
    if (city.length !== 0) {     
      const timer = setTimeout(() => {
        getCoordsByCity(city).then(data => setCoords({
          lat: data.lat,
          lon: data.lon,
          name: data.name
        }))
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [city]);

  useEffect(() => {
    if (coords.name.length !== 0) {
      getWeatherByCoords(coords.lat, coords.lon).then(data => setWeather(data))
      setLoading(false)
    }
  }, [coords]);

  return (
    <div>
        <input 
          className={classes.myInput}
          onChange={ e => setCity(e.target.value)} 
          type="text" 
        />
        <WeatherDay city={coords.name} weather={weather.current} isLoading={isLoading} />
        <WeatherNextDays weather={weather.daily} />
    </div>
  )
}

export default WeatherSearch;
