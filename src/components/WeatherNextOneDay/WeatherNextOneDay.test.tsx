import { render } from "@testing-library/react";
import WeatherNextOneDay from "./WeatherNextOneDay";

describe("WeatherNextOneDay", ()=> {
  test("matches snapshot", () => {
    const day = {
      temp: {
        max: 14,
        min: 6,
      },
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
    const {container} = render(<WeatherNextOneDay day={day} />)
    expect(container).toMatchSnapshot();
  });
});