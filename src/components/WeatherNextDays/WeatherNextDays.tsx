import { Grid } from "@mui/material";
import { IDaysWeather } from "../../dto/types";
import WeatherNextOneDay from "../WeatherNextOneDay/WeatherNextOneDay";

type Props = {
    weather: IDaysWeather[],
}

const WeatherNextDays = ({weather}: Props) => {
  return (
      <Grid
        container spacing={2}
        justifyContent="space-around"
        alignItems="center"

      >
        {weather.slice(1,7).map((day, index) => 
          <Grid item xs={2} key={index}>
            <WeatherNextOneDay day={day} />
          </Grid>
        )}
      </Grid>
  )
}

export default WeatherNextDays;