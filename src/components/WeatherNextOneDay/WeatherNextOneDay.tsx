import moment from "moment";
import { IDaysWeather } from "../../dto/types";
import classes from './WeatherNextOneDay.module.css';
import iconLink from "../../utils/getIcons";
import { Grid } from "@mui/material";

type Props = {
  day: IDaysWeather,
}

const WeatherNextOneDay = ({day} : Props) => {
  const convertDay = (time: number) => {
    return moment.unix(time).local().format('dddd');
  }
  return (
    <div 
      className={classes.oneDay}
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title={day.weather[0].description}
    >
      <Grid 
        container spacing={0}
        justifyContent="space-around"
        className={classes.dailyStyle}
      >
        <Grid item xs={12}>
          <h3 className={classes.day}>
            {convertDay(day.dt)}
          </h3>
        </Grid>
        <Grid item xs={4} md={6} xl={7}>
          <img 
            src={iconLink(day.weather[0].icon)} 
            alt={day.weather[0].description} 
            />
        </Grid>
        <Grid item xs={8} md={6} xl={5}>
          <h3 className={classes.dailyTemp}>
            {Math.round(day.temp.max)}&deg;C
          </h3>
          <p className={classes.minTemp}>
            {Math.round(day.temp.min)}&deg;C
          </p>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default WeatherNextOneDay;