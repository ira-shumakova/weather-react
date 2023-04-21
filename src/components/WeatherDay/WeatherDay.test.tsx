import { render } from "@testing-library/react";
import WeatherDay from "./WeatherDay";

describe("WeatherDay", () => {
  test("matches snapshot", () => {
    const weather = {
      temp: 14,
      feels_like: 13,
      humidity: 55,
      pressure: 1017,
      sunrise: 1681960920,
      sunset: 1682011401,
      wind_speed: 6.68,
      dt: 1681984800,
      weather: [
        {
          description: "broken clouds",
          icon: "04d",
          main: "Clouds"
        },
      ],
    };
    const city = "Lviv";
    const isLoading = false;
    const {container} = render(<WeatherDay weather={weather} city={city} isLoading={isLoading}/>)
    expect(container).toMatchSnapshot();
  });
});