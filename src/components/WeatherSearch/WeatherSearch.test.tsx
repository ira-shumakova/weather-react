import { render } from "@testing-library/react";
import WeatherSearch from "./WeatherSearch";

describe("WeatherSearch", () => {
    test("matches snapshot", () => {
        const {container} = render(<WeatherSearch />)
        expect(container).toMatchSnapshot();
    })
})