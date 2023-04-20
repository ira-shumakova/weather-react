import { IMainWeather } from "../../dto/types";
import { Grid } from "@mui/material";
import moment from "moment";
import classes from './WeatherDay.module.css';
import iconLink from "../../utils/getIcons";
import {CircularProgress} from "@mui/material";

type Props = {
    weather: IMainWeather,
    city: string,
    isLoading: boolean,
}

const WeatherDay = ({ weather, city, isLoading }: Props) => {
    const convertTime = (time: number) => {
        return moment.unix(time).local().format("HH:mm")
    }
    const convertDate = (time: number) => {
      return moment.unix(time).local().format("HH:mm, Do MMMM YYYY")
    }

    return (
        <div className={classes.weatherDay}>
          {!isLoading &&
            <Grid 
                container spacing={2}
                justifyContent="space-around"
                alignItems="center"
                className={classes.weatherBox}
            >
                <Grid item xs={3} className={classes.firstGrid}>
                    <h1 className={classes.paddingTopGrid}>{city}</h1>
                    <h2>{Math.round(weather.temp)}&deg;C</h2>
                    <p>Updated at {convertDate(weather.dt)}</p>
                </Grid>
                <Grid item xs={3}>
                    <img 
                        src={iconLink(weather.weather[0].icon)} 
                        alt={weather.weather[0].description}  className={classes.weatherIcon} 
                    />
                    <h3 className={classes.weatherDescription}>
                        {weather.weather[0].description}
                    </h3>
                </Grid>
                <Grid item xs={5} className={classes.lastGrid} >
                    <Grid container>
                        <Grid item xs={6} className={classes.paddingTop}>
                          Feels like: {Math.round(weather.feels_like)}&deg;C
                        </Grid>
                        <Grid item xs={6} className={classes.paddingTop}>
                          Wind: {weather.wind_speed} M/S
                        </Grid>
                        <Grid item xs={6} className={classes.paddingTop}>
                          Pressure: {weather.pressure} hPa
                        </Grid>
                        <Grid item xs={6} className={classes.paddingTop}>
                          Humidity: {weather.humidity}%
                        </Grid>
                        <Grid item xs={6} className={classes.paddingTop}>
                          Sunrise: {convertTime(weather.sunrise)}
                        </Grid>
                        <Grid item xs={6} className={classes.paddingTop}>
                          Sunset: {convertTime(weather.sunset)}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
          }
          {isLoading &&
            <CircularProgress className={classes.circProgress} color="success"/>
          }
        </div>
    )
}

export default WeatherDay;